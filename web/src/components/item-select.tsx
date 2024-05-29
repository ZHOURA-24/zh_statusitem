import { EllipsisVerticalIcon } from "lucide-react"
import { ItemProps } from "./card-item"

export const ItemSelect = ({
    data
}: { data: ItemProps }) => {
    return (
        <div className="bg-accent rounded flex flex-col p-1">
            <div className="flex justify-between gap-x-2">
                <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {data.label} ({data.count})
                </p>
                <EllipsisVerticalIcon />
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="flex items-center justify-center p-2">
                    <img src="./images/burger.png" />
                    <p className="text-xs">1x</p>
                </div>
                <div className="flex items-center justify-center p-2">
                    <img src="./images/burger.png" />
                    <p className="text-xs">1x</p>
                </div>
                <div className="flex items-center justify-center p-2">
                    <img src="./images/burger.png" />
                    <p className="text-xs">1x</p>
                </div>
                <div className="flex items-center justify-center p-2">
                    <img src="./images/burger.png" />
                    <p className="text-xs">1x</p>
                </div>
            </div>
        </div>
    )
}
