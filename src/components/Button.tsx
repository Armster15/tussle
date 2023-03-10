import React from "react";
import cn from "classnames";
import type { ButtonProps as HTMLButtonProps } from "react-html-props";

export interface ButtonProps extends HTMLButtonProps {
  color?: "red" | "green" | "blue" | "gray" | "black";
  size?: "small" | "normal" | "large";
  variant?: "solid" | "outline";
}

const solidClasses = {
  red: cn(
    "bg-red-600 hover:bg-red-700 active:bg-red-700 ring-red-600/50 text-white",
    "dark:ring-red-500/50"
  ),
  green: cn(
    "bg-emerald-700/[0.9] hover:bg-emerald-600 active:bg-emerald-600 text-white ring-emerald-600/50",
    "dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:active:bg-emerald-600"
  ),
  blue: cn(
    "bg-blue-600 hover:bg-blue-500 active:bg-blue-500 text-white",
    "dark:ring-blue-500/50"
  ),
  gray: cn(
    "bg-gray-200 hover:bg-gray-300 active:bg-gray-300 ring-gray-400/70",
    "dark:bg-gray-600 dark:hover:bg-gray-500 dark:active:bg-gray-500 dark:ring-gray-400/50 dark:text-gray-200"
  ),
  black: cn(
    "bg-black hover:bg-black/70 active:bg-black/70 ring-neutral-400 text-white",
    "dark:bg-white dark:hover:bg-gray-300 dark:active:bg-gray-300 dark:text-black"
  ),
};

const outlineClasses = {
  red: cn(
    "border-red-600 text-red-600 hover:bg-red-100 active:bg-red-100 ring-red-700/50 focus:border-red-700/80",
    "dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/80 dark:active:bg-red-900/80 dark:ring-red-600 dark:focus:border-red-500"
  ),
  green: cn(
    "border-emerald-600 text-emerald-700 hover:bg-emerald-100 active:bg-emerald-100 ring-emerald-700/50 focus:border-emerald-700/80",
    "dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/80 dark:active:bg-emerald-900/80 dark:ring-emerald-600 dark:focus:border-emerald-600"
  ),
  blue: cn(
    "border-blue-600 text-blue-600 hover:bg-blue-100 active:bg-blue-100 ring-blue-600/50 focus:border-blue-600",
    "dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-900/80 dark:active:bg-blue-900/80 dark:ring-blue-600 dark:focus:border-blue-600"
  ),
  gray: cn(
    "border-gray-400 text-gray-500 hover:bg-gray-200 active:bg-gray-200 ring-gray-500/50 focus:border-gray-500/80",
    "dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-600 dark:ring-white/70 dark:focus:border-white/70"
  ),
  black: cn(
    "border-black text-black hover:bg-gray-200 active:bg-gray-200 ring-gray-500/50 focus:border-black/80",
    "dark:border-white dark:text-white dark:hover:bg-gray-700 dark:active:bg-gray-700 dark:ring-white/50 dark:focus:border-white/80"
  ),
};

export const Button = ({
  className,
  color = "blue",
  size = "normal",
  variant = "solid",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // Base styles
        "duration-150 font-medium rounded border-2",
        // Focus ring
        "focus-visible:outline-2 outline-offset-4",
        variant === "solid"
          ? "not-focus-visible:focus:ring-[3px]"
          : "not-focus-visible:focus:ring-1",
        // Size
        size === "small"
          ? "px-3 py-2 text-sm"
          : size === "large"
          ? "px-5 py-3 text-lg"
          : "px-4 py-2",
        // Color
        variant === "solid" ? solidClasses[color] : outlineClasses[color],
        // Transparent border for solid buttons
        variant === "solid" && "border-transparent border-2",
        // Additional classes
        className
      )}
      {...props}
    />
  );
};
