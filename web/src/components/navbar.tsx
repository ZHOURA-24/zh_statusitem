import { ModeToggle } from "@/components/mode-toggle"
import { SearchInput } from "@/components/search-input"

export const Navbar = () => {
    return (
        <div className="flex gap-x-2 p-2">
            <SearchInput />
            <ModeToggle />
        </div>
    )
}
