import { cn } from "@/lib/utils"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

interface IPerformanceSwitchProps extends React.HTMLProps<HTMLDivElement> {
  id: string
  label: string
  description: string
  config?: {
    checked: boolean
    onCheckedChange(checked: boolean): void
  }
}

export function PerformanceSwitch({
  id,
  label,
  description,
  config,
  className,
  ...props
}: IPerformanceSwitchProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="flex items-center gap-4">
        {config === undefined ? (
          <Switch id={id} disabled checked={false} />
        ) : (
          <Switch
            id={id}
            checked={config.checked}
            onCheckedChange={config.onCheckedChange}
          />
        )}
        <Label htmlFor={id} className="whitespace-nowrap text-lg font-bold">
          {label}
        </Label>
      </div>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}
