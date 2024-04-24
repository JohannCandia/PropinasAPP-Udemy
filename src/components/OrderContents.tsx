import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"


type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem["id"]) => void

}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'> Consumo </h2>

        <div className="space-y-3 mt-5">
            {order.length === 0
             ? <p>No hay elementos en la orden</p>
             : order.map((orderItem) => (
                <div key={orderItem.id} className="flex justify-between border border-solid p-2">
                    <div className="flex flex-col my-2">
                    <p className="text-lg">{orderItem.name} - {formatCurrency(orderItem.price)}</p>
                    <p className="font-black">Cantidad : {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)} </p>
                    </div>
                    <div className="my-auto">
                    <button
                    onClick={() => removeItem(orderItem.id)}
                    className="bg-red-600 text-white rounded-3xl mx-4 w-6 h-6 hover:bg-red-500">X</button>

                    </div>

                </div>
            ))
            
            }
        </div>

    </div>
  )
}
