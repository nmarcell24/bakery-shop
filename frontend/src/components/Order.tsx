import { Dessert } from "../lib/types";

export interface IAppProps {
}

export function Order ({ name, price, quantity, _id }: Dessert) {
    return (
        <div className="orderContainer" id={_id}>
            <h3>{ name }</h3>
            <section>
                <p className="quanity">{ quantity }x</p>
                <p>${ price.toFixed(2) }</p>
                <p>${ (quantity * price).toFixed(2) }</p>
            </section>
            <span className="material-symbols-outlined">cancel</span>
            <hr />
        </div>
    );
}
