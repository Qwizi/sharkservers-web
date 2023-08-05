'use client';

import {useState} from "react";
import Image from "next/image";
import {Bars3Icon, ChevronDownIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {Dialog, Disclosure, Popover} from '@headlessui/react'

// @ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // @ts-ignore
    return (
        <header className="bg-slate-900 border-b-2 border-slate-800">
            <nav className="mx-auto flex container items-center justify-between p-6 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">SharkServers.pl</span>
                        <Image className="h-9 w-auto" src={"/images/logo.png"} alt={"Shark servers.pl"} width={300}
                               height={68}/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                        Użytkownicy
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                        Sklep
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                        Lista banów
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                        Zaloguj się
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-200 block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-800">
                        Zarejestruj się
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">SharkServers.pl</span>
                            <Image className="h-9 w-auto" src={"/images/logo.png"} alt={"Shark servers.pl"} width={300}
                                   height={68}/>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
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