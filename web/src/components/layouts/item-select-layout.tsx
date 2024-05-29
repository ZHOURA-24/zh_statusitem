export const ItemSelectLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-background h-[300px] overflow-auto hide-scrollbar rounded w-[200px] p-2 gap-y-2">
            {children}
        </div>
    )
}
