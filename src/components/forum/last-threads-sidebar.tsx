import router from "next/router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Page_ThreadOut_ } from "sharkservers-sdk";
import Thread from "./thread";
import LastThread from "./last-thread";

export default function LastThreadSidebar({...props}: Page_ThreadOut_) {
    const {items} = props;
    return (
        <Card className="mt-10">
            <CardHeader>
                <CardTitle>Ostatnie tematy</CardTitle>
                <CardDescription>5 ostatnich tematów</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-5">
                {items && items.map((thread, i) => 
                    <LastThread key={i} {...thread} />
                )}
            </CardContent>
        </Card>
    )
}