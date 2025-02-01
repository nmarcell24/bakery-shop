import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Dessert } from "./lib/types";

export function Menu() {
  const [desserts, setDesserts] = useState<Dessert[]>([]);

  useEffect(() => {
    const fetchDesserts = async () => {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      setDesserts(data);
    };

    fetchDesserts();
  }, []);

  return (
    <div className="menuContainer">
      <h1>Desserts</h1>
      <div className="cardContainer">
        {desserts.map((dessert: Dessert) => <Card key={dessert._id} {...dessert} />)}
      </div>
    </div>
  );
}
