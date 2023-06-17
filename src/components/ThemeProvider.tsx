'use client';
import React from "react";
import { ThemeProvider as TP } from 'next-themes'

interface IProviderProps {
    children: React.ReactNode;
    defaultTheme: 'dark';
}

export default function ThemeProvider({ children }: IProviderProps) {
    return <TP>{children}</TP>;
}