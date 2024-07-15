import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  propina: number;
  placeOrder: () => void;
};

const OrderTotals = ({ order, propina, placeOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const propinaAmount = useMemo(
    () => subTotalAmount * propina,
    [propina, order]
  );

  const totalPagar = useMemo(
    () => subTotalAmount + propinaAmount,
    [propina, order]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Tatales y Propina</h2>
        <p>
          SubTotal a paga: {""}{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propina: {""}{" "}
          <span className="font-bold">{formatCurrency(propinaAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}{" "}
          <span className="font-bold">{formatCurrency(totalPagar)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-15 disabled:opacity-10"
        disabled={totalPagar === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
