import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomSwitchProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  id?: string
}

const CustomSwitch = React.forwardRef<
  HTMLInputElement,
  CustomSwitchProps
>(({ className, checked, onCheckedChange, disabled, id, ...props }, ref) => {
  return (
    <label 
      className={cn(
        "switch relative inline-block cursor-pointer",
        "w-14 h-8", // 3.5em x 2em converted to Tailwind
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      htmlFor={id}
    >
      <input
        ref={ref}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        disabled={disabled}
        className="opacity-0 w-0 h-0 absolute"
        {...props}
      />
      <span 
        className={cn(
          "slider absolute top-0 left-0 right-0 bottom-0",
          "bg-white border border-gray-400 transition-all duration-400 rounded-full",
          "before:absolute before:content-[''] before:h-6 before:w-6",
          "before:rounded-full before:left-1 before:bottom-1",
          "before:bg-gray-400 before:transition-all before:duration-400",
          // Checked state
          checked && "bg-blue-600 border-blue-600",
          checked && "before:transform before:translate-x-6 before:bg-white",
          // Focus state
          "focus-within:shadow-[0_0_1px_#007bff]"
        )}
      />
    </label>
  )
})

CustomSwitch.displayName = "CustomSwitch"

export { CustomSwitch }