import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

const sidebarNavItems = [
    {
        name: "Użytkownicy",
        links: [
            {
                title: "Lista użytkowników",
                href: "/admin/users",
            },
            {
                title: "Dodaj użytkownika",
                href: "/admin/users/create",
            },
        ],
    },
    {
        name: "Gracze",
        links: [
            {
                title: "Lista graczy",
                href: "/admin/players",
            },
        ],
    },
    {
        name: "Serwery",
        links: [
            {
                title: "Lista serwerow",
                href: "/admin/servers",
            },
        ],
    },
    {
        name: "Forum",
        links: [
            {
                title: "Lista kategorii",
                href: "/admin/forum/categories",
            },
        ],
    },
]

export function Sidebar({ className }: SidebarProps) {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    {sidebarNavItems.map((item) =>
                        <div key={item.name}>
                            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                {item.name}
                            </h2>
                            <div className="space-y-1">
                                {item.links.map((link) => (
                                    <Button
                                        key={link.href}
                                        variant={pathname === link.href ? "secondary" : "ghost"}
                                        className="w-full justify-start"
                                        onClick={() => router.push(link.href)}
                                    >
                                        {link.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}