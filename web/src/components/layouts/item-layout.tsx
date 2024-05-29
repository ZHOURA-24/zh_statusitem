import { Navbar } from "@/components/navbar"

export const ItemLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <main className="bg-background w-[500px] h-[300px] rounded flex flex-col">
            <Navbar />
            <div className="grid grid-cols-4 gap-2 pb-2 px-2 flex-grow overflow-auto hide-scrollbar">
                {children}
            </div>
        </main>
    )
}
