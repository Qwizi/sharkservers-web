'use client';
import Link from "next/link";
import {useSession} from "next-auth/react";
import Username from "@/components/Elements/Username";
import {usePathname} from "next/navigation";

const linnks = [
    {
        href: "/settings",
        name: "Podsumowanie",
        icon: "flaticon-account"
    },
    {
        href: "/settings/username",
        name: "Nazwa użytkownika",
        icon: "flaticon-settings"
    },
    {
        href: "/settings/password",
        name: "Hasło",
        icon: "flaticon-settings"
    },
    {
        href: "/settings/email",
        name: "E-mail",
        icon: "flaticon-settings"
    },
    {
        href: "/settings/roles",
        name: "Role",
        icon: "flaticon-settings"
    },
    {
        href: "/settings/accounts",
        name: "Konta",
        icon: "flaticon-settings"
    }
]

export default function SettingsLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    const {data: session} = useSession()
    const pathName = usePathname()
    return (
        <section className="creator-info-area pt-130 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-8">
                        <div className="creator-info-details mb-40 wow fadeInUp">
                            <div className="creator-cover-img pos-rel">
                                <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                                <img src="/assets/img/profile/profile-cover/profile-cover4.jpg" alt="cover-img"/>
                            </div>
                            <div className="creator-img-name">
                                <div className="profile-img pos-rel">
                                    <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                                    <img src="/assets/img/profile/profile1.jpg" alt="profile-img"/>
                                </div>
                                <div className="creator-name-id">
                                    <h4 className="artist-name pos-rel">
                                        <Username color={session?.user?.display_role?.color || "#000"}
                                                  username={session?.user?.username || "User"} />
                                    </h4>
                                    <div className="artist-id">@Kalla.ban</div>
                                </div>
                            </div>
                            <div className="profile-setting-list">
                                <ul>
                                    {linnks.map((link) => (
                                        <li key={link.name} className={pathName == link.href ? "active": ""}>
                                            <Link href={link.href}><i className={link.icon}></i>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}