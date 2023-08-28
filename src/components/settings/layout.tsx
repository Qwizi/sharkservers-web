'use client'
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/settings/sidebar-nav"

const sidebarNavItems = [
    {
        title: "Nazwa użytkownika",
        href: "/settings",
    },
    {
        title: "E-mail",
        href: "/settings/email",
    },
    {
        title: "Hasło",
        href: "/examples/forms/appearance",
    },
    {
        title: "Avatar",
        href: "/settings/avatar",
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <div className="rounded-[0.5rem] border bg-background shadow">
            <div className="space-y-6 p-10 pb-16 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Ustawienia</h2>
                    <p className="text-muted-foreground">
                        Zarządzaj twoim kontem
                    </p>
                </div>
                <Separator />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/4">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </div>
    )
}