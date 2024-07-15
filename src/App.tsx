import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import Propina from "./components/Propina";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, propina, setPropina, addItem, removeItem, placeOrder } =
    useOrder();

  return (
    <>
      <header className="bg-teal-400 py-6">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg p-5 space-y-10">
          {order.length ? (
            <div>
              <OrderContent order={order} removeItem={removeItem} />
              <Propina setPropina={setPropina} propina={propina} />
              <OrderTotals
                order={order}
                propina={propina}
                placeOrder={placeOrder}
              />
            </div>
          ) : (
            <p className="text-center">La orden esta vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
