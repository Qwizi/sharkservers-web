import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateTimeFormatter = new Intl.DateTimeFormat("pl-PL", {dateStyle: "medium", timeStyle: "medium"})
