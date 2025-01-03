"use client"

import { cn } from "@/lib/utils"
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { Badge } from "./ui/badge"
import { ScrollArea } from "./ui/scroll-area"

type KeyTesterState = {
  pressedKeycodes: string[]
  releasedKeycodes: string[]
}

const KeyTesterContext = createContext<KeyTesterState>({
  pressedKeycodes: [],
  releasedKeycodes: [],
})

type KeyEvent = {
  id: number
  code: string
}

const KEY_UP_TIMEOUT = 500

const randomNumber = () => {
  const array = new Uint32Array(1)
  window.crypto.getRandomValues(array)
  return array[0]
}

const getKeycode = (e: KeyboardEvent) => (e.code === "" ? e.key : e.code)

export function KeyTesterProvider({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  const [pressedKeycodes, setPressedKeycodes] = useState<KeyEvent[]>([])
  const [releasedKeycodes, setReleasedKeycodes] = useState<KeyEvent[]>([])
  const timeouts = useRef<Record<number, NodeJS.Timeout>>({})

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      e.preventDefault()
      const keycode = getKeycode(e)
      if (keycode === null) {
        return
      }
      setPressedKeycodes((prev) =>
        prev.some((event) => event.code === e.code)
          ? prev
          : [
              ...prev,
              {
                id: randomNumber(),
                code: getKeycode(e),
              },
            ],
      )
    }

    const onKeyUp = (e: KeyboardEvent) => {
      e.preventDefault()
      const id = randomNumber()
      setPressedKeycodes((prev) =>
        prev.filter((event) => event.code !== getKeycode(e)),
      )
      setReleasedKeycodes((prev) => [...prev, { id, code: getKeycode(e) }])

      timeouts.current[id] = setTimeout(() => {
        setReleasedKeycodes((prev) => prev.filter((event) => event.id !== id))
        delete timeouts.current[id]
      }, KEY_UP_TIMEOUT)
    }

    const cleanup = () => {
      for (const timeout of Object.values(timeouts.current)) {
        clearTimeout(timeout)
      }
      timeouts.current = {}
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      cleanup()
    }
  }, [])

  return (
    <KeyTesterContext.Provider
      value={{
        pressedKeycodes: pressedKeycodes.map((e) => e.code),
        releasedKeycodes: releasedKeycodes.map((e) => e.code),
      }}
    >
      {children}
    </KeyTesterContext.Provider>
  )
}

export function KeyTesterDown({
  className,
  ...props
}: React.ComponentProps<typeof ScrollArea>) {
  const { pressedKeycodes } = useContext(KeyTesterContext)

  return (
    <ScrollArea
      className={cn("w-full rounded-lg border", className)}
      {...props}
    >
      <div className="flex flex-wrap gap-2 p-4">
        {pressedKeycodes.map((code, i) => (
          <Badge key={i}>{code}</Badge>
        ))}
      </div>
    </ScrollArea>
  )
}

export function KeyTesterUp({
  className,
  ...props
}: React.ComponentProps<typeof ScrollArea>) {
  const { releasedKeycodes } = useContext(KeyTesterContext)

  return (
    <ScrollArea
      className={cn("w-full rounded-lg border", className)}
      {...props}
    >
      <div className="flex flex-wrap gap-2 p-4">
        {releasedKeycodes.map((code, i) => (
          <Badge key={i}>{code}</Badge>
        ))}
      </div>
    </ScrollArea>
  )
}
