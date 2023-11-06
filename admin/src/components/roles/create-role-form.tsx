'use client'
import { CreateRoleSchema, CreateRoleSchemaInputs } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createRoleAction } from "@/actions";
import { Checkbox } from "../ui/checkbox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useApi from "@/hooks/api";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, CheckIcon, ChevronsUpDown, PlusCircleIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
interface ICreateRoleForm {
    scopes: any
    setOpen: (open: boolean) => void
}

const options = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Tree", label: "Tree" },
    { value: "Four", label: "Four" },
    { value: "Six", label: "Six" },
];

export default function CreateRoleForm({ setOpen, scopes }: ICreateRoleForm) {
    const router = useRouter()
    const selectedValues = new Set<string>();
    const form = useForm<CreateRoleSchemaInputs>({
        resolver: zodResolver(CreateRoleSchema),
        defaultValues: {
            name: "",
            color: "",
            is_staff: false,
            scopes: []
        },
    })
    const api = useApi()
    console.log(scopes)

    const { toast } = useToast()

    const onSubmit: SubmitHandler<CreateRoleSchemaInputs> = async data => {
        let scopeIds: number[] = []
        data?.scopes?.forEach((scope, index) => {
            const split = scope.split(":")
            scopeIds.push(Number(split[split.length - 1]))
        })
        data.scopesIds = scopeIds
        console.log(data)
        const response = await createRoleAction(data)
        if (response.serverError) {
            toast({
                variant: "destructive",
                title: "Ups. Coś poszło nie tak",
                description: response.serverError
            })
        } else {
            setOpen(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nazwa</FormLabel>
                            <FormControl>
                                <Input placeholder="nazwa roli" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kolor</FormLabel>
                            <FormControl>
                                <Input placeholder="kolor" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="scopes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Scopes </FormLabel>
                            <FormControl>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant='outline'
                                                className='w-full justify-start'
                                            >
                                                <PlusCircleIcon className='mr-2 h-4 w-4' />
                                                {selectedValues?.size > 0 && (
                                                    <>
                                                        <Separator
                                                            orientation='vertical'
                                                            className='mx-2 h-4'
                                                        />
                                                        <Badge
                                                            variant='secondary'
                                                            className='rounded-sm px-1 font-normal lg:hidden'
                                                        >
                                                            {selectedValues.size}
                                                        </Badge>
                                                        <div className='flex space-x-1'>
                                                            {selectedValues.size > 4 ? (
                                                                <Badge
                                                                    variant='secondary'
                                                                    className='rounded-sm px-1 font-normal'
                                                                >
                                                                    {selectedValues.size} selected
                                                                </Badge>
                                                            ) : (
                                                                scopes?.items
                                                                    .filter((option) =>
                                                                        selectedValues.has(`${option.app_name}:${option.value}:${option.id}`),
                                                                    )
                                                                    .map((option) => (
                                                                        <Badge
                                                                            variant='secondary'
                                                                            key={option.value}
                                                                            className='rounded-sm px-1 font-normal'
                                                                        >
                                                                            {option.app_name}:{option.value}
                                                                        </Badge>
                                                                    ))
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-[200px] p-0' align='start'>
                                        <Command>
                                            <CommandInput
                                                placeholder='Search array...'
                                                className='h-9'
                                            />
                                            <CommandEmpty>No result found.</CommandEmpty>
                                            <CommandGroup>
                                                {scopes.items.map((option, index) => {
                                                    const isSelected = selectedValues.has(`${option.app_name}:${option.value}:${option.id}`);
                                                    return (
                                                        <CommandItem
                                                            key={index}
                                                            onSelect={() => {
                                                                if (isSelected) {
                                                                    selectedValues.delete(`${option.app_name}:${option.value}:${option.id}`);
                                                                } else {
                                                                    selectedValues.add(`${option.app_name}:${option.value}:${option.id}`);
                                                                }
                                                                const filterValues =
                                                                    Array.from(selectedValues);
                                                                form.setValue("scopes", filterValues);
                                                            }}
                                                        >
                                                            <div
                                                                className={cn(
                                                                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                                    isSelected
                                                                        ? "bg-primary text-primary-foreground"
                                                                        : "opacity-50 [&_svg]:invisible",
                                                                )}
                                                            >
                                                                <CheckIcon className={cn("h-4 w-4")} />
                                                            </div>
                                                            <span>{option.app_name}:{option.value}</span>
                                                        </CommandItem>
                                                    );
                                                })}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="is_staff"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Is staff? </FormLabel>
                            <FormControl>
                                <Checkbox id="is_staff" {...field} />

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" data-action='submit'>Dodaj</Button>
            </form>
        </Form>
    )
}