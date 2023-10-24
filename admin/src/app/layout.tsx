
import './globals.css'
import '@uiw/react-markdown-editor/markdown-editor.css';


import type { Metadata } from 'next'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider"
import ToasterClient from '@/components/toaster';
import { NextAuthProvider } from '@/components/session-provider';
import { ModalProvider } from '@/components/model-provider';
import { Sidebar } from '@/components/layout/sidebar';

export const metadata: Metadata = {
    title: 'Admin Panel - SharkServers.pl',
    description: 'Sieć serwerów do gry Team Fortress 2',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="bg-background dark">
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <NextAuthProvider>
                        <Header />

                        <main className="container mx-auto py-6 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-5">
                                <Sidebar />
                                <div className="col-span-3 lg:col-span-4 lg:border-l">
                                    <div className="h-full px-4 py-6 lg:px-8">
                                        {children}
                                    </div>
                                </div>
                            </div>



                        </main>
                        <ToasterClient />
                        <Footer />
                    </NextAuthProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
