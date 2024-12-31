import { cn } from '@/lib/utils'
import { IKeyboard } from '@/types/keyboard'

interface IKeyboardProps {
  keyboard: IKeyboard
  className?: string
  elt(index: number): React.JSX.Element
}

export default function Keyboard({ keyboard, className, elt }: IKeyboardProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {keyboard.metadata.layout.map((row, i) => (
        <div key={i} className="flex">
          {row.map((key, j) => (
            <div
              key={j}
              style={{
                width: `${key.w * 4}rem`,
                height: `${key.h * 4}rem`,
                marginLeft: `${key.ml * 4}rem`,
                marginTop: `${key.mt * 4}rem`,
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
