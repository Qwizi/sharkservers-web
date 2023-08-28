'use client'
import * as React from "react"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserOut2Schema } from "sharkservers-sdk";
import Username from "./username";
import { Badge } from "../ui/badge";


export function UserCard({ ...props }: UserOut2Schema) {
  const { username, display_role, avatar } = props
  
  return (
    <Card className="">
      <Image src="/images/profile/cover.jpg" width="600" height="150" alt="cover image"/>
      <CardHeader className="items-center">
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" width="100" height="100" />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
        <Username
          username={username}
          color={display_role?.color}
        />
      </CardHeader>
      {/* <CardFooter className="flex justify-between">
        Tematów
        <Badge variant="outline">1</Badge>
        Postów
        <Badge variant="outline">1</Badge>
      </CardFooter> */}
    </Card>
  )
}
