import { CategoryOut, Page_CategoryOut_ } from "sharkservers-sdk";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function CategoriesSidebar({...props}: Page_CategoryOut_) {
    const {items} = props
    return (
        <Card className="mt-10">
            <CardHeader>
                <CardTitle>Kategorie</CardTitle>
                <CardDescription>Wybierz kategorie</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-5">
                {items && items.map((category, i) => 
                    <Button variant="outline" key={i} className="w-full">{category.name}</Button>
                )}
            </CardContent>
        </Card>
    )
}