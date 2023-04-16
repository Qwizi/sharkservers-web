'use client';

import React from "react";
import {SessionProvider} from "next-auth/react";

interface IProviderProps {
    children: React.ReactNode;
}

export default function Provider({ children }: IProviderProps) {
    return <SessionProvider>{children}</SessionProvider>;
}