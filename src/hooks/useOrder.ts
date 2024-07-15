import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [propina, setPropina] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((ordenItem) => ordenItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((ordenItem) =>
        ordenItem.id === item.id
          ? { ...ordenItem, quantity: ordenItem.quantity + 1 }
          : ordenItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setPropina(0);
  };

  return { order, propina, setPropina, addItem, removeItem, placeOrder };
}
