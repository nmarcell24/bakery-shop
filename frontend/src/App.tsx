import { Cart } from "./Cart";
import CartContextProvider from "./contexts/CartContext";
import { Menu } from "./Menu";

function App() {
  return (
    <CartContextProvider>
      <div className="appContainer">
        <Menu />
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
