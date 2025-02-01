import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Dessert } from "./lib/types";
import { useCartContext } from "./hooks/useCartContext";

export function Menu() {
  const [desserts, setDesserts] = useState<Dessert[]>([]);
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    const fetchDesserts = async () => {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      setDesserts(data);
    };

    fetchDesserts();
  }, []);

  const handleAddToCart = (dessert: Dessert) => {
    let isAlreadyInCart = false;
    // check for item already in cart
    cart.forEach((item) => {
      if (item._id === dessert._id) {
        item.quantity += 1;
        setCart([...cart]);
        isAlreadyInCart = true;
        return;
      }
    });

    if (!isAlreadyInCart) {
      dessert.quantity = 1;
      setCart([...cart, dessert]);
    }
  };

  return (
    <div className="menuContainer">
      <h1>Desserts</h1>
      <div className="cardContainer">
        {desserts.map((dessert: Dessert) => (
          <Card
            handleAddToCart={handleAddToCart}
            key={dessert._id}
            {...dessert}
          />
        ))}
      </div>
    </div>
  );
}
