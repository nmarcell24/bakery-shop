import { useCartContext } from "../hooks/useCartContext";
import { Dessert } from "../lib/types";

type CardProps = {
  handleAddToCart: (dessert: Dessert) => void;
} & Dessert;

export function Card({
  image,
  category,
  name,
  quantity,
  price,
  _id,
  handleAddToCart,
}: CardProps) {
  const { cart, setCart } = useCartContext();
  const clickedDessert = cart.find((item) => item._id == _id);
  const itemQuantity = clickedDessert ? clickedDessert.quantity : 0;

  const imageStyle: React.CSSProperties = {
    outline: "5px solid rgb(199, 58, 15)",
  };

  const handleDecrement = () => {
    let updatedCart: Dessert[] = []
    if(clickedDessert?.quantity === 1){
        updatedCart = cart.filter(dessert => {
            if(dessert._id !== clickedDessert._id){
                dessert.quantity = 0
                return dessert;
            }
        })
    } else {
        updatedCart = cart.map((dessert) => {
          if (dessert._id === clickedDessert?._id) {
            dessert.quantity--;
          }
          return dessert;
        });
    }

    setCart(updatedCart);
  };

  const handleIncrement = () => {
    const updatedCart: Dessert[] = cart.map((dessert) => {
      if (dessert._id === clickedDessert?._id) {
        dessert.quantity++;
      }
      return dessert;
    });

    setCart(updatedCart);
  };

  return (
    <div className="card" id={_id}>
      <img src={image.desktop} alt={category} style={itemQuantity > 0 ? imageStyle : undefined} />
      {itemQuantity > 0 ? (
        <div className="quantityContainer">
          <span className="material-symbols-outlined" onClick={handleDecrement}>
            remove
          </span>
          {itemQuantity}
          <span
            className="material-symbols-outlined"
            onClick={handleIncrement}
          >
            add
          </span>
        </div>
      ) : (
        <button
          onClick={() =>
            handleAddToCart({ _id, image, name, category, quantity, price })
          }
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
          Add to cart
        </button>
      )}
      <p>{category}</p>
      <h3>{name}</h3>
      <h3>${price.toFixed(2)}</h3>
    </div>
  );
}
