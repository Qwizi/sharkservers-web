'use server';

import {AuthPostApi} from "@/lib/fetchApi";

export default async function CreateThreadAction(data: any) {
    const res = await AuthPostApi('http://localhost/v1/forum/threads', {
        title: data.title,
        content: data.content,
        category: data.category,
    })
    const result = await res.json()
    console.log(result)
}