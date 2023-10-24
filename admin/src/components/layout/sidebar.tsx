'use client'
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
const adminLinks = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Użytkownicy",
    path: "/users",
  },
  {
    name: "Gracze",
    path: "/players",
  },
  {
    name: "Role",
    path: "/roles",
  },
  {
    name: "Kategorie",
    path: "/categories",
  },
  {
    name: "Serwery",
    path: "/servers",
  },
]

export function Sidebar() {
  const router = useRouter()
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {adminLinks.map((link, index) =>
              <Button variant={pathName == link.path ? "secondary" : "ghost"} key={index} onClick={() => router.push(link.path)} className="w-full justify-start">{link.name}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}