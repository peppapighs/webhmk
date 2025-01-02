import { useEffect, useRef, useState } from "react"

interface KeyEvent {
  key: string
  code: string
  timestamp: number
}

export function KeyTester() {
  const [pressedKeys, setPressedKeys] = useState<KeyEvent[]>([])
  const [releasedKeys, setReleasedKeys] = useState<KeyEvent[]>([])
  const timeouts = useRef<{ [key: string]: NodeJS.Timeout }>({})
  const TIMEOUT_DURATION = 1000 // exactly 1 second

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault()
      setPressedKeys((prev) => {
        if (prev.some((k) => k.code === e.code)) return prev
        return [...prev, { key: e.key, code: e.code, timestamp: Date.now() }]
      })
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const timestamp = Date.now()
      const newKey = {
        key: e.key,
        code: e.code,
        timestamp,
      }

      setPressedKeys((prev) => prev.filter((k) => k.code !== e.code))
      // Add new released key without filtering existing ones
      setReleasedKeys((prev) => [...prev, newKey])

      // Set timeout using timestamp as identifier
      timeouts.current[timestamp] = setTimeout(() => {
        setReleasedKeys((prev) => prev.filter((k) => k.timestamp !== timestamp))
        delete timeouts.current[timestamp]
      }, TIMEOUT_DURATION)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      Object.values(timeouts.current).forEach(clearTimeout)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Key Tester</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Pressed Keys Column */}
        <div className="rounded border p-4">
          <h3 className="mb-2 font-medium">Pressed Keys</h3>
          <div className="space-y-2">
            {pressedKeys.map((event) => (
              <div
                key={event.timestamp}
                className="toggle-item flex size-16 flex-col items-center justify-center overflow-hidden p-1 text-sm"
              >
                <span className="font-mono">
                  {event.key} ({event.code})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Released Keys Column */}
        <div className="rounded border p-4">
          <h3 className="mb-2 font-medium">Released Keys</h3>
          <div className="space-y-2">
            {releasedKeys.map((event) => (
              <div
                key={event.timestamp}
                className="toggle-item flex size-16 flex-col items-center justify-center overflow-hidden p-1 text-sm"
              >
                <span className="font-mono">
                  {event.key} ({event.code})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
