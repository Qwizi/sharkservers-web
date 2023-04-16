'use client';
import React from "react";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {signin} from "next-auth/core/routes";

export default function Header() {
    const {data:  session} = useSession();
    console.log(session)
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                {session?.user ? (
                    <button onClick={() => signOut()}>Wyloguj sie</button>
                ) : (
                    <button onClick={() => signIn()}>Zaloguj sie</button>
                )}
            </div>
        </header>
    );
}