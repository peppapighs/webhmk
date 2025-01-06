import { cn } from "@/lib/utils"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"

interface IPerformanceSliderProps extends React.HTMLProps<HTMLDivElement> {
  id: string
  label: string
  description: string
  config?: {
    min: number
    max: number
    value: number
    onValueChange(value: number): void
  }
}

export function PerformanceSlider({
  id,
  label,
  description,
  config,
  className,
  ...props
}: IPerformanceSliderProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <Label htmlFor={id} className="whitespace-nowrap text-lg font-bold">
        {label}
      </Label>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="flex flex-col py-4">
        {config === undefined ? (
          <Slider id={id} disabled value={[0]} />
        ) : (
          <Slider
            id={id}
            min={config.min}
            max={config.max}
            value={[config.value]}
            onValueChange={([value]) => config.onValueChange(value)}
          />
        )}
      </div>
    </div>
  )
}
