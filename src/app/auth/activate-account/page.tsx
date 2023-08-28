import ActivateAccountCard from "@/components/auth/activate-account-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Check } from "lucide-react";
export default function ActivateAccountPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const registration = searchParams.registration

    return (
        <section>
            {registration && (
                <Alert className="mb-10">
                    <Check className="h-4 w-4" />
                    <AlertTitle>Rejestracja zakończona pomyślnie</AlertTitle>
                    <AlertDescription>
                        Właśnie wysłaliśmy wiadomość e-mail na podany przez Ciebie adres, z kodem potrzebnym do aktywacji konto. Wpisz go do formularza poniżej
                    </AlertDescription>
                </Alert>
            )}
            <ActivateAccountCard />
        </section>
    )
}