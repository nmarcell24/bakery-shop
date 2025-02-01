export type Dessert = {
    _id: string;
    image: {
        thumbnail: string;
        mobil: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
    quantity: number;
}