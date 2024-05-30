import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { getImagePath } from "@/utils/getImagePath"
import { Portal } from "@/components/portal"

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
    const [showTooltip, setShowTooltip] = useState(false)
    const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 })

    const handleMouseEnter = (event: React.MouseEvent) => {
        setTooltipPos({ top: event.clientY + 20, left: event.clientX + 20 })
        setShowTooltip(true)
    }

    const handleMouseMove = (event: React.MouseEvent) => {
        setTooltipPos({ top: event.clientY + 20, left: event.clientX + 20 })
    }

    const handleMouseLeave = () => {
        setShowTooltip(false)
    }

    return (
        <div
            className={cn("relative h-[100px] flex flex-col items-center justify-between hover:cursor-pointer duration-300", selected ? "border rounded scale-90" : "")}
            role="button"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={getImagePath(data.name)}
                alt={data.name}
                className="w-[70px] h-[70px] z-10 bg-repeat bg-center object-contain self-center hover:scale-110 duration-300 bg-contain"
            />
            <div className="w-full bg-accent rounded flex justify-center">
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">{data.label}</span>
            </div>
            {showTooltip && (
                <Portal>
                    <div
                        style={{ position: 'fixed', top: tooltipPos.top, left: tooltipPos.left }}
                        className="z-50 rounded border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 duration-300"
                    >
                        {data.items && data.items.length > 0 && (
                            <div className="grid grid-cols-2 gap-2">
                                {data.items.map((item, index) => (
                                    <div key={index} className="flex gap-x-1">
                                        <img src={getImagePath(item.name)} alt={item.name} className="w-4 h-4" />
                                        {item.label || item.name} -
                                        ({item.count})
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Portal>
            )}
        </div>
    )
}
