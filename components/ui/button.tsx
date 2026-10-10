import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  className,
  variant = "default",
  size = "default",
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-foreground text-background hover:bg-foreground/90": variant === "default",
      "border-2 border-foreground/20 hover:bg-foreground/5": variant === "outline",
      "hover:bg-foreground/5": variant === "ghost",
      "px-6 py-3 text-sm": size === "default",
      "px-4 py-2 text-xs": size === "sm",
      "px-8 py-4 text-base": size === "lg",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles}>
      {children}
    </button>
  );
}
