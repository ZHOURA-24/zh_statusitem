import { cn } from "@/lib/utils"
import { getImagePath } from "@/utils/getImagePath"

export type ItemProps = {
    name: string
    label: string
    count: number
    items?: ItemProps[]
}

export const CardItem = ({
    data,
    selected,
    onClick
}: { data: ItemProps, selected: boolean, onClick?: () => void }) => {
    return (
        <div
            className={cn("relative h-[100px] flex flex-col items-center justify-between hover:cursor-pointer duration-300", selected ? "border rounded scale-90" : "")}
            role="button"
            onClick={onClick}
        >
            <img
                src={getImagePath(data.name)}
                alt={data.name}
                className="w-[70px] h-[70px] z-10 bg-repeat bg-center object-contain self-center hover:scale-110 duration-300 bg-contain"
            />
            <div className="w-full bg-accent rounded flex justify-center">
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">{data.label}</span>
            </div>
        </div>
    )
}
