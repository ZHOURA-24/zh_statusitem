import { CardItem, ItemProps } from "@/components/card-item"
import { ItemLayout } from "@/components/layouts/item-layout"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNuiEvent } from "@/hooks/useNuiEvent"
import { debugData } from "@/utils/debugData"
import { ItemSelectLayout } from "./components/layouts/item-select-layout"
import { ItemSelect } from "./components/item-select"
import { Visible } from "./visible"

function App() {
  const [items, setItems] = useState<ItemProps[]>([])
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null)
  const [seach] = useSearchParams()

  useNuiEvent("setItems", setItems)

  useNuiEvent("updateSelectedItem", (data: ItemProps) => {
    if (data.count === 0) return setSelectedItem(null);
    setSelectedItem(data)
  })

  return (
    <Visible>
      <main className="relative top-10 left-20 flex gap-x-10 w-fit h-fit">
        <div className="flex flex-col gap-y-2">
          <ItemLayout>
            {items.filter((item) => item.label.toLowerCase().includes(seach.get("q")?.toLowerCase() || '')).map((item) =>
              <CardItem
                key={item.name}
                data={item}
                selected={selectedItem?.name === item.name}
                onClick={() => setSelectedItem({ ...item, count: 0 })} />
            )}
          </ItemLayout>
        </div>
        {selectedItem && <ItemSelectLayout>
          <ItemSelect
            key={selectedItem.name}
            data={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </ItemSelectLayout>}
      </main>
    </Visible>
  )
}

export default App


debugData([
  {
    action: "setItems",
    data: [
      {
        name: "burger",
        label: "Burger asd asdas dasd asd asdasd asdasdasd",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "cocktail",
        label: "Cocktail",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "lemonade",
        label: "Lemonade",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "milkteaboba",
        label: "Milk Tea Boba",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "pasta",
        label: "Pasta",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "ramen",
        label: "Ramen",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "sushi",
        label: "Sushi",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
      {
        name: "wine",
        label: "Wine",
        items: [
          {
            name: "burger",
            count: 1
          },
          {
            name: "milkteaboba",
            count: 2
          },
          {
            name: "cocktail",
            count: 3
          },
          {
            name: "lemonade",
            count: 4
          },
        ]
      },
    ],
  },
])
