import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";
import { OrderStatus } from "../enums/OrderStatus";

export class Order {

    public items: OrderItem[] = [];

    constructor(
        public id: number,
        public customer: Customer,
        public createdAt: Date = new Date(),
        public status: OrderStatus = OrderStatus.NEW
    ) {}

    addItem(item: OrderItem): void {
        this.items.push(item);
    }

    removeItem(productId: number): void {
        this.items = this.items.filter(
            item => item.product.id !== productId
        );
    }

    calculateTotal(): number {
        return this.items.reduce(
            (sum, item) => sum + item.getTotal(),
            0
        );
    }

    printInvoice(): void {

        console.log("========== HÓA ĐƠN ==========");
        console.log(this.customer.toString());

        this.items.forEach(item => {
            console.log(
                `${item.product.name} x ${item.quantity} = ${item.getTotal()}`
            );
        });

        console.log("TOTAL:", this.calculateTotal());
        console.log("STATUS:", this.status);
    }
}