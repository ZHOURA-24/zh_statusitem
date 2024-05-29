import { CardItem, ItemProps } from "@/components/card-item"
import { ItemLayout } from "@/components/layouts/item-layout"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNuiEvent } from "@/hooks/useNuiEvent"
import { debugData } from "@/utils/debugData"
import { ItemSelectLayout } from "./components/layouts/item-select-layout"
import { ItemSelect } from "./components/item-select"

function App() {
  const [items, setItems] = useState<ItemProps[]>([])
  const [selectedItems, setSelectedItems] = useState<ItemProps[]>([])
  const [seach] = useSearchParams()

  useNuiEvent("setItems", setItems)

  return (
    <main className="relative top-10 left-20 flex gap-x-10 w-fit h-fit">
      <ItemLayout>
        {items.filter((item) => item.label.toLowerCase().includes(seach.get("q")?.toLowerCase() || '')).map((item) =>
          <CardItem
            key={item.name}
            data={item}
            onClick={() => !selectedItems.some(selected => selected.name === item.name) && setSelectedItems([...selectedItems, { ...item, count: 1 }])} />
        )}
      </ItemLayout>
      <ItemSelectLayout>
        {selectedItems.map((item) =>
          <ItemSelect
            key={item.name}
            data={item}
          />
        )}
      </ItemSelectLayout>
    </main>
  )
}

export default App


debugData([
  {
    action: "setItems",
    data: [
      {
        name: "burger",
        label: "Burger Test Test Test"
      },
      {
        name: "cocktail",
        label: "Cocktail"
      },
      {
        name: "lemonade",
        label: "Lemonade"
      },
      {
        name: "milkteaboba",
        label: "Milk Tea Boba"
      },
      {
        name: "pasta",
        label: "Pasta"
      },
      {
        name: "ramen",
        label: "Ramen"
      },
      {
        name: "sushi",
        label: "Sushi"
      },
      {
        name: "wine",
        label: "Wine"
      },
    ],
  },
])
