import './globals.css'
import 'react-responsive-modal/styles.css';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Provider from "@/components/Provider";
import Header from "@/components/Layout/Header";
import ThemeProvider from "@/components/ThemeProvider";
import "../../public/assets/css/default.css";
import "../../public/assets/css/fontAwesome5Pro.css";
import "../../public/assets/css/flaticon.css";

import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Footer from "@/components/Layout/Footer";
import {usePathname} from "next/navigation";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import {ToastContainer} from "react-toastify";


if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

export const metadata = {
    title: 'SharkServers.pl',
    description: 'Generated by create next app',
}


export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode,
}) {
    const session: Session | null = await getServerSession(authOptions)
    console.log(session?.user?.email)
    return (
        <html lang="en">
        <body className="body-bg">
        <Provider session={session}>
            <ThemeProvider defaultTheme="dark">
                <Header/>
                <Breadcrumbs/>
                {children}

                <Footer/>
            </ThemeProvider>
        </Provider>
        </body>
        </html>
    )
}
