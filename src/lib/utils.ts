import type { ClassNameValue } from "tailwind-merge"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...values: ClassNameValue[]): string {
  return twMerge(clsx(...values))
}
