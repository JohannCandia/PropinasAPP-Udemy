import { useState } from "react";
import { OrderItem, MenuItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? {
                ...orderItem,
                quantity: orderItem.quantity + 1,
              }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };
  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };

  const placeOrder = () => {
   setOrder([]);
    setTip(0);
  };
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
