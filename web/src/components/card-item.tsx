export type ItemProps = {
    name: string
    label: string
    count?: number
}

export const CardItem = ({
    data,
    onClick
}: { data: ItemProps, onClick?: () => void }) => {
    return (
        <div
            className="relative h-[100px] flex flex-col items-center justify-between hover:cursor-pointer"
            role="button"
            onClick={onClick}
        >
            <img
                src={`./images/${data.name}.png`}
                alt={data.name}
                className="w-[70px] h-[70px] z-10 bg-repeat bg-center object-contain self-center hover:scale-110 duration-300 bg-contain"
            />
            <div className="w-full bg-accent rounded flex justify-center">
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">{data.label}</span>
            </div>
        </div>
    )
}
