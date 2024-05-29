import { CardItem, ItemProps } from "@/components/card-item"
import { AppLayout } from "@/components/layouts/app-layout"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNuiEvent } from "@/hooks/useNuiEvent"
import { debugData } from "@/utils/debugData"

function App() {
  const [items, setItems] = useState<ItemProps[]>([])
  const [seach] = useSearchParams()

  useNuiEvent("setItems", setItems)

  return (
    <AppLayout>
      {items.filter((item) => item.label.toLowerCase().includes(seach.get("q")?.toLowerCase() || '')).map((item) =>
        <CardItem key={item.name} {...item} />
      )}
    </AppLayout>
  )
}

export default App


debugData([
  {
    action: "setItems",
    data: [
      {
        name: "burger",
        label: "Burger"
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
