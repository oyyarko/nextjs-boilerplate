import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "h-10 flex items-center rounded-lg bg-blue-500 text-white px-4 text-sm font-semibold transition-colors hover:outline-blue-500 hover:bg-transparent hover:outline-dashed hover:outline-2 hover:border-dashed hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
