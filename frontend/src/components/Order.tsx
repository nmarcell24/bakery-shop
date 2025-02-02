import { useCartContext } from "../hooks/useCartContext";
import { Dessert } from "../lib/types";

export function Order ({ name, price, quantity, _id }: Dessert) {
    const {cart, setCart} = useCartContext();

    const deleteItem = (_id: string) => {
        const updatedCart = cart.filter(dessert => dessert._id !== _id);
        setCart(updatedCart);
    }

    return (
        <div className="orderContainer" id={_id}>
            <h3>{ name }</h3>
            <section>
                <p className="quanity">{ quantity }x</p>
                <p>${ price.toFixed(2) }</p>
                <p>${ (quantity * price).toFixed(2) }</p>
            </section>
            <span className="material-symbols-outlined" onClick={() => deleteItem(_id)}>cancel</span>
            <hr />
        </div>
    );
}
