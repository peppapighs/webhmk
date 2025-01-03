import { cn } from "@/lib/utils"
import { KeyboardMetadata } from "@/types/keyboard-metadata"
import { JSX } from "react"

interface IKeyboardLayoutProps {
  metadata: KeyboardMetadata
  size: number
  className?: string
  elt(i: number): JSX.Element
}

export function KeyboardLayout({
  metadata,
  size,
  className,
  elt,
}: IKeyboardLayoutProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {metadata.layout.map((row, i) => (
        <div key={i} className="flex">
          {row.map((key, j) => (
            <div
              key={j}
              className="relative"
              style={{
                width: `${key.w * size}rem`,
                height: `${key.h * size}rem`,
                marginLeft: `${key.ml * size}rem`,
                marginTop: `${key.mt * size}rem`,
              }}
            >
              {elt(key.i)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
