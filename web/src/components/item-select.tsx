import { useState } from 'react';
import { EllipsisVerticalIcon, MinusIcon, PlusIcon } from 'lucide-react';
import { ItemProps } from '@/components/card-item';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const ItemSelect = ({
    data,
    selectedItems,
    setSelectedItems,
}: {
    data: ItemProps;
    selectedItems: ItemProps[];
    setSelectedItems: (items: ItemProps[]) => void;
}) => {
    const selectedItem = selectedItems.find(item => item.name === data.name);
    const initialCount = selectedItem ? selectedItem.count : 0;

    const [count, setCount] = useState(initialCount);

    if (!count || count < 1) return null;

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateSelectedItems(newCount);
    };

    const handleDecrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            updateSelectedItems(newCount);
        } else {
            updateSelectedItems(0);
        }
    };

    const updateSelectedItems = (newCount: number) => {
        if (newCount === 0) {
            setSelectedItems(selectedItems.filter(item => item.name !== data.name));
        } else {
            const updatedItems = selectedItems.map(item =>
                item.name === data.name ? { ...item, count: newCount } : item
            );
            setSelectedItems(updatedItems);
        }
    };

    return (
        <div className="bg-accent rounded flex flex-col p-1">
            <div className="flex justify-between gap-x-2">
                <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                    [{count}] {data.label}
                </p>
                <div className="flex">
                    <MinusIcon role="button" onClick={handleDecrement} />
                    <PlusIcon role="button" onClick={handleIncrement} />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVerticalIcon />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" sideOffset={20} className="w-32">
                            <DropdownMenuLabel className="overflow-hidden whitespace-nowrap text-ellipsis">
                                {data.label}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => {
                                    setSelectedItems(selectedItems.filter(item => item.name !== data.name));
                                }}
                            >
                                Remove
                            </DropdownMenuItem>
                            <DropdownMenuItem>Start</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {data.items?.map(item => (
                    <div key={item.name} className="flex items-center justify-center p-2">
                        <img src={`./images/${item.name}.png`} alt={item.name} />
                        <p className="text-xs">{item.count * count}x</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
