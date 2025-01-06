import { keycodeToMetadata } from "@/lib/keycodes"
import { cn } from "@/lib/utils"

interface IKeycodeProps {
  keycode: number
}

export function Keycode({ keycode: keycodeNumber }: IKeycodeProps) {
  const keycode = keycodeToMetadata(keycodeNumber)

  return (
    <>
      {" "}
      <span
        className={cn(
          keycode.overlay &&
            "opacity-0 transition-opacity group-hover:opacity-100",
        )}
      >
        {keycode.render ? (
          <>
            {keycode.render}
            <span className="sr-only">{keycode.name}</span>
          </>
        ) : (
          keycode.name
        )}
      </span>
      {keycode.overlay && (
        <div className="keycode absolute inset-0 transition-opacity group-hover:opacity-0">
          {keycode.overlay}
        </div>
      )}
    </>
  )
}
