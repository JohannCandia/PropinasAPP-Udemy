import type { MenuItem } from "../types"

type MenuItemProps = {
  item : MenuItem, 
  addItem: (item : MenuItem) => void,
}

export default function menuItem({item , addItem} : MenuItemProps) {
  return (
    <>
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
    onClick={() => addItem(item)}>  
        <h3>{item.name}</h3>
        <p>${item.price}</p>

    </button>
    

    </>
  )
}