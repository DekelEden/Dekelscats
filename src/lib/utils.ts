import type { ClassNameValue } from "tailwind-merge"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export type ClassMap<T extends string> = Partial<Record<T, string>>

export function cn(...values: ClassNameValue[]): string {
  return twMerge(clsx(...values))
}

export function stripHtml(content: string): string {
  return content.replace(/<[^>]*>?/gm, "")
}

export function notDraftFilter(item: { draft?: boolean }): boolean {
  return !item.draft
}
