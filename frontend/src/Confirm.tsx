import { Dessert } from "./lib/types";
import { useCartContext } from "./hooks/useCartContext";

export function Confirm({
  setIsShown,
}: {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cart, setCart } = useCartContext();

  const handleReset = () => {
    setCart([]);
    setIsShown(false);
  };

  return (
    <div className="confirmContainer">
      <main>
        <span className="material-symbols-outlined">check_circle</span>
        <h1>Order Confirmed</h1>
        <h4>We hope you enjoy your food!</h4>
        <section>
          {cart.map((order: Dessert) => (
            <article key={order._id}>
              <div>
                <img src={order.image.desktop} alt={order.name} />
                <div>
                  <p>{order.name}</p>
                  <div className="flexBox">
                    <p>{order.quantity}x</p>
                    <p>${order.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <h3>${(order.price * order.quantity).toFixed(2)}</h3>
            </article>
          ))}
        </section>
        <div className="totalContainer">
          <h3>Order Total</h3>
          <h1>
            $
            {cart
              .reduce((total, order) => total + order.price * order.quantity, 0)
              .toFixed(2)}
          </h1>
        </div>
        <button className="bigButton" onClick={handleReset}>
          Start New Order
        </button>
      </main>
    </div>
  );
}
