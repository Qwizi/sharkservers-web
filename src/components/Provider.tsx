'use client';

import React from "react";
import {SessionProvider} from "next-auth/react";

interface IProviderProps {
    children: React.ReactNode;
    session: any;
}

export default function Provider({ children, session }: IProviderProps) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}