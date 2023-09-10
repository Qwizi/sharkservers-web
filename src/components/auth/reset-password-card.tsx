'use client'
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import ResetPasswordForm from "./reset-password-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ConfirmResetPasswordForm from "./confirm-reset-password-form";

export default function ResetPasswordCard() {
    const [tab, setTab] = useState("e-mail");

    const onTabChange = (value) => {
        setTab(value);
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Zresetuj hasło
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="account" onValueChange={onTabChange} value={tab}>
                        
                        <TabsContent value="e-mail">
                            <ResetPasswordForm setTab={setTab}/>
                        </TabsContent>
                        <TabsContent value="confirm">
                            <ConfirmResetPasswordForm />
                        </TabsContent>
                    </Tabs>
                    
                </CardContent>
            </Card>
        </>
    )
}