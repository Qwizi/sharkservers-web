'use client'
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import LoginForm from "./login-form";
export default function LoginCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Zaloguj się
                </CardTitle>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    )
}