import { Navbar } from "@/components/navbar"

export const AppLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <main className="absolute bg-background w-[500px] h-[300px] top-10 left-20 rounded duration-500 flex flex-col">
            <Navbar />
            <div className="grid grid-cols-4 gap-2 pb-2 px-2 flex-grow overflow-auto hide-scrollbar">
                {children}
            </div>
        </main>
    )
}
