import { Product } from "./Product";

export class OrderItem {

    constructor(
        public product: Product,
        public quantity: number,
        public price: number
    ) {}

    getTotal(): number {
        return this.quantity * this.price;
    }
}