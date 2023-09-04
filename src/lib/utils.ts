import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateTimeFormatter = new Intl.DateTimeFormat("pl-PL", {dateStyle: "medium", timeStyle: "medium"})

export function hasScope(roles: any, scope: string) {
  let has = false
  roles.map((role) => {
    role.scopes.map((item) => {
      const scopeSplit = scope.split(":")
      const app_name = scopeSplit[0]
      const value = scopeSplit[1] 
      if (item.app_name == app_name && item.value == value) {
        has = true
      }
    })
  })
  
  return has
}