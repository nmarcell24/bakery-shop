import { useState } from "react";
import { Order } from "./components/Order";
import { Confirm } from "./Confirm";
import { useCartContext } from "./hooks/useCartContext";

export function Cart() {
  const { cart } = useCartContext();
  const [isShown, setIsShown] = useState(false);



  return (
    <div className="cartContainer">
      <h1>Your Cart {cart.reduce((total, num) => total + num.quantity, 0)}</h1>
      {cart.length === 0 ? (
        <div className="emptyCartContainer">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty-cart"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="orderedDessertsContainer">
          {cart.map((order) => (
            <Order key={order._id} {...order} />
          ))}
          <div className="totalContainer">
            <h3>Order Total</h3>
            <h1>
              $
              {cart &&
                cart
                  .reduce(
                    (total, order) => total + order.price * order.quantity,
                    0
                  )
                  .toFixed(2)}
            </h1>
          </div>
          <div className="infoContainer">
            <p className="material-symbols-outlined">Nature</p>
            <p>
              This is a<strong> carbon-neutral </strong>delivery
            </p>
          </div>
          <button
            className="bigButton"
            onClick={() => setIsShown((prev) => !prev)}
          >
            Confirm Order
          </button>
        </div>
      )}
      {isShown && <Confirm setIsShown={setIsShown} />}
    </div>
  );
}
