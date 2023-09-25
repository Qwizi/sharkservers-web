'use client'
import "@uiw/react-md-editor/markdown-editor.css";

import { useState } from "react";
import { Separator } from "../ui/separator";
import CreateThreadForm from "./create-thread-form";
import { Page_CategoryOut_ } from "sharkservers-sdk";


interface ICreateThread {
    categories: Page_CategoryOut_,
    category?: string |  undefined
}

export default function CreateThread({categories, category}: ICreateThread) {

    return (
        <div className="rounded-[0.5rem] border bg-background shadow">
            <div className="space-y-6 p-10 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Nowy wątek</h2>
                    <p className="text-muted-foreground">
                        Utwórz nowy wątek
                    </p>
                </div>
                <Separator />
            </div>
            <div className="p-10 w-full">
                <CreateThreadForm categories={categories} category={category}/>
            </div>


        </div>
    )
}