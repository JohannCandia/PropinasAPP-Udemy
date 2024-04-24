import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalProps = {
  order: OrderItem[];
};

export default function OrderTotals({ order }: orderTotalProps) {
  const subtotalAmounts = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmounts * 0.1, [subtotalAmounts]);
  
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
        onClick={() => window.location.reload()}
      className="bg-teal-400 p-2 rounded-lg text-white font-bold hover:bg-teal-500 w-full">
        Reiniciar orden
      </button>
    </>
  );
}
