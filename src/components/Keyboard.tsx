import { IKeyboard } from '@/types/keyboard'

interface IKeyboardProps {
  keyboard: IKeyboard
  size: 'sm' | 'md' | 'lg'
  className?: string
  elt(index: number): React.JSX.Element
}

const sizes = {
  sm: 4,
  md: 5,
  lg: 6,
}

export default function Keyboard({ keyboard, size, elt }: IKeyboardProps) {
  return (
    <div className="flex flex-col">
      {keyboard.metadata.layout.map((row, i) => (
        <div key={i} className="flex">
          {row.map((key, j) => (
            <div
              key={j}
              style={{
                width: `${key.w * sizes[size]}rem`,
                height: `${key.h * sizes[size]}rem`,
                marginLeft: `${key.ml * sizes[size]}rem`,
                marginTop: `${key.mt * sizes[size]}rem`,
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
