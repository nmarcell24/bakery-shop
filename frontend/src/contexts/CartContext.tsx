import { createContext, useState } from "react";
import { Dessert } from "../lib/types";

const CartContext = createContext<{
  cart: Dessert[];
  setCart: React.Dispatch<React.SetStateAction<Dessert[]>>;
}>({ cart: [], setCart: () => {} });

import { ReactNode } from "react";

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<Dessert[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
