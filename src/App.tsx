import "./App.css";
import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderTotals from "./components/OrderTotals";
import OrderContents from "./components/OrderContents";
import TipPorcentageForm from "./components/TipPorcentageForm";

function App() {
  const { order, addItem, removeItem, tip , setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>
      <main className="max-w-full mx-4 mt-8 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black mb-2">Menu</h2>
          <div className="space-y-3 mt-8 ">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className=" border border-dashed border-slate-200 p-4 rounded-lg space-y-10">
      
         {
            order.length > 0 ? (
              <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPorcentageForm setTip={setTip} tip={tip}/>
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/>
              </>
            ) : (
              <h2 className="text-2xl font-black text-center">La orden está vacia</h2>
            )
         }
        </div>
      </main>
    </>
  );
}

export default App;
