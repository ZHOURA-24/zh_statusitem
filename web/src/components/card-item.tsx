export type ItemProps = {
    name: string
    label: string
}

export const CardItem = ({
    name,
    label
}: ItemProps) => {
    return (
        <div className="relative h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
            <img
                src={`./images/${name}.png`}
                alt={name}
                className="w-[70px] h-[70px] z-10 bg-repeat bg-center object-contain self-center hover:scale-110 duration-300 bg-contain"
            />
            <div className="w-full bg-accent rounded flex justify-center">
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">{label}</span>
            </div>
        </div>
    )
}
