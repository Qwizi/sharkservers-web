import { Badge } from "../ui/badge"

interface IThreadBadges {
    categoryName: string,
    is_closed: boolean,
    is_pinned: boolean,

}

export default function ThreadBadges({ categoryName, is_closed, is_pinned }: IThreadBadges) {

    const ClosedStatusBadge = () => {
        if (is_closed) {
            return <Badge variant="destructive">Zamknięty</Badge>
        }
        return <Badge variant="secondary">Otwarty</Badge>
        
    }

    const PinnedStatusBadge = () => {
        if (!is_pinned) return
        return (
            <Badge  className="bg-yellow-400 text-white">Wątek przypiety</Badge>
        )
    }

    const CategoryNameBadge = () => {
        return (
            <Badge className="text-white">{categoryName}</Badge>
        )
    }
    return (
        <div>
            <CategoryNameBadge />
            <ClosedStatusBadge />
            <PinnedStatusBadge />
        </div>
    )
}