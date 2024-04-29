import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({ order, tip, placeOrder }: orderTotalProps) {
  const subtotalAmounts = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );  
  const tipAmount = useMemo(() => subtotalAmounts * tip, [tip, order]);

  const totalAmount = useMemo(
    () => subtotalAmounts + tipAmount,
    [subtotalAmounts, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales: </h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmounts)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        onClick={placeOrder}
        disabled={totalAmount === 0}
        className="bg-teal-400 p-2 rounded-lg disabled:opacity-65 disabled:hover:bg-teal-400 text-white font-bold hover:bg-teal-500 w-full"
      >
        Reiniciar orden
      </button>
    </>
  );
}
