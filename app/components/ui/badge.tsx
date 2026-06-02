import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "glow";
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseStyle = "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "bg-blue-600/20 text-blue-400 border border-blue-500/30",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700",
    outline: "text-slate-300 border border-slate-700",
    glow: "bg-blue-500/10 text-sky-300 border border-blue-400/40 shadow-[0_0_10px_rgba(56,189,248,0.15)]"
  };

  return (
    <span
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export { Badge };
