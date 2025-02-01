import { Dessert } from "../lib/types";

export function Card ({ image, category, name, quantity, price, _id }: Dessert) {
    return (
        <div className="card" id={_id}>
            <img src={image.desktop} alt={category} />
            {quantity > 0 ? (
                <div>
                    <p>-</p>
                    <p>{ quantity }</p>
                    <p>+</p>
                </div>
            ) : (
                <button><span className="material-symbols-outlined">add_shopping_cart</span>Add to cart</button>
            )}
            <p>{ category }</p>
            <h3>{ name }</h3>
            <h3>${ price.toFixed(2) }</h3>
        </div>
    );
}
