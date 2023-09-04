'use client';

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Popover } from '@headlessui/react'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Username from "../users/username";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import { SwitchTheme } from "../theme-switcher";


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { data: session, status } = useSession()
    const router = useRouter()
    
    return (
        <header className="border-b">
            <nav className="mx-auto flex container items-center justify-between p-6 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">SharkServers.pl</span>
                        <Image className="h-12 w-auto" src={"/images/logo.png"} alt={"Shark servers.pl"} width={300}
                            height={68} />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Link href="/forum" className="text-sm leading-6 text-slate-200 block rounded-md px-3 py-2 font-medium hover:bg-slate-800">
                        Forum
                    </Link>
                    <Link href="/users" className="text-sm leading-6 text-slate-200 block rounded-md px-3 py-2 font-medium hover:bg-slate-800">
                        Użytkownicy
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-12">
                    {status == "unauthenticated" && (
                        <>
                            <Link href="/auth/login" className="leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                                Zaloguj się
                            </Link>
                            <Link href="/auth/register" className="leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                                Zarejestruj się
                            </Link>
                        </>
                    )}
                    {status == "authenticated" && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={session?.user?.avatar} alt={`@${session?.user.username}`} />
                                        <AvatarFallback>{session?.user?.username}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            <Username id={session?.user?.id} username={session?.user.username} color={session?.user?.display_role?.color}/> <Badge variant="outline" style={{color: session?.user?.display_role?.color}}>{session?.user?.display_role?.name}</Badge>
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {session?.user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={(e) => router.push(`/profile/${session?.user?.id}-${session?.user?.username}`)}>
                                        Profil
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>u
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={(e) => router.push("/settings")}>
                                        Ustawienia
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={(e) => signOut()}>
                                    Wyloguj się
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                    <SwitchTheme />
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">SharkServers.pl</span>
                            <Image className="h-9 w-auto" src={"/images/logo.png"} alt={"Shark servers.pl"} width={300}
                                height={68} />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800"
                                >
                                    Użytkownicy
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800"
                                >
                                    Sklep
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800"
                                >
                                    Lista banów
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800"
                                >
                                    Zaloguj się
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-200 hover:bg-slate-800"
                                >
                                    Zarejestruj się
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header