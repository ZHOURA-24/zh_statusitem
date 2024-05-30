export const ItemSelectLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-background h-fit max-h-[300px] overflow-auto hide-scrollbar rounded w-[230px] p-2 gap-y-2">
            {children}
        </div>
    )
}
