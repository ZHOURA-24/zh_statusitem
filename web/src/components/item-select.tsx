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
import { getImagePath } from '@/utils/getImagePath';
import { fetchNui } from '@/utils/fetchNui';
import { isEnvBrowser } from '@/utils/misc';

export const ItemSelect = ({
    data,
    setSelectedItem
}: {
    data: ItemProps;
    setSelectedItem: (item: ItemProps | null) => void;
}) => {

    const handleIncrement = () => {
        const newCount = data.count + 1;
        fetchNui("canCraft", { ...data, count: newCount }).then((data) => {
            if (data) {
                updateSelectedItems(newCount);
            }
        })
        if (isEnvBrowser()) {
            updateSelectedItems(newCount);
        }
    };

    const handleDecrement = () => {
        updateSelectedItems(data.count - 1);
    };

    const updateSelectedItems = (newCount: number) => {
        if (newCount <= 0) {
            setSelectedItem(null);
        } else {
            setSelectedItem({ ...data, count: newCount });
        }
    };

    return (
        <div className="bg-accent rounded flex flex-col gap-y-2 p-1 w-full h-fit">
            <div className="flex justify-between gap-2 w-full relative">
                <div className='flex flex-col w-full'>
                    <img src={getImagePath(data.name)} alt={data.name} className="w-16 h-16" />
                    <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                        [{data.count}] {data.label}
                    </p>
                </div>
                <div className="absolute top-0 right-0 flex items-start">
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
                                    setSelectedItem(null);
                                }}
                            >
                                Remove
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => data.count > 0 && fetchNui("startCraft", data)}>Start</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 border rounded">
                {data.items?.map(item => (
                    <div key={item.name} className="flex items-center justify-center p-2">
                        <img src={getImagePath(item.name)} alt={item.name} />
                        <p className="text-xs">{item.count * data.count}x</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
