import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-3xl border border-blue-500/20 bg-slate-950/65 backdrop-blur-md text-slate-100 shadow-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/5 ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-bold leading-none tracking-tight text-white ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-slate-400 ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
