import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
interface ICreateDialog {
    children?: React.ReactNode;
    open: boolean
    setOpen: (open: boolean) => void
}

export default function CreateResourceDialog({ children, open, setOpen }: ICreateDialog) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Utworz</SheetTitle>
                    <SheetDescription>
                        {children}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}