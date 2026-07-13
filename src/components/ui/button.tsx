Import (Slut) from "@radix-ul/react-slot"
import cva, type Variant Props from "class-variance-authority"
import { cn from @/lib/utils"
const buttonVariants = cva
"Inline-flex Itens-center justify-center gap-2 whitespace-nowrap rounded-nd text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]
{
: pointer-events-none [8_svg]:size-4 [B_svg]: shrink-0",
variants: {
variant: (
"bg-primary text-primary-foreground shadow hover:bg-primary/90",
default:
destructive:
"bg-destructive text-destructive-foreground shadow-sa hover:bg-destructive/90",
outline:
"border" border-Input bg-background shadow-sm hover:bg-accent hover: text-accent-foreground",
secondary:
"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
ghost: "hover:bg-accent hover: text-accent-foreground",
link: "text-primary underline-offset-4 hover:underline",
} size: (
default: "h-9 px-4 py-2",
sm: "h-8 rounded-nd px-3 text-xs",
Ig: "h-10 rounded-ind px-8",
icon: "h-9 w-9",
defaultVariants:
variant: "default".
size: "default",
export interface ButtonProps
extends React.ButtonTHLAttributes<HTMLButtonElement>,
Variant Props<typeof buttonVariants> (
asChild?: boolean
const Button React.forwardRef <HTMLButtonElement, ButtonProps> ( ((className, variant, size, asChild false, ...props), ref) =>
const Comp asChild? Slot: "button"
return (
<Comp
className=[cn(buttonVariants({variant, size, className:))))
ref={ref)
(...props)
Button.displayName "Button"
export Button, buttonVariants}
