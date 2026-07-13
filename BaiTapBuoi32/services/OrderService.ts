import { Order } from "../models/Order";
import { Customer } from "../models/Customer";
import { ProductService } from "./ProductService";
import { OrderItem } from "../models/OrderItem";
import { OrderStatus } from "../enums/OrderStatus";

export class OrderService {

    private orders: Order[] = [];

    constructor(private productService: ProductService) {}

    createOrder(customer: Customer): Order {

        const order = new Order(
            this.orders.length + 1,
            customer
        );

        this.orders.push(order);

        return order;
    }

    addProduct(orderId: number, productId: number, quantity: number): void {

        const order = this.findOrder(orderId);
        const product = this.productService.findById(productId);

        if (!order || !product) return;

        if (product.stock < quantity) {
            console.log("Không đủ hàng.");
            return;
        }

        product.decreaseStock(quantity);

        order.addItem(
            new OrderItem(product, quantity, product.price)
        );
    }

    removeProduct(orderId: number, productId: number): void {

        const order = this.findOrder(orderId);

        if (!order) return;

        const item = order.items.find(
            i => i.product.id === productId
        );

        if (item) {
            item.product.increaseStock(item.quantity);
        }

        order.removeItem(productId);
    }

    checkout(orderId: number): void {

        const order = this.findOrder(orderId);

        if (order) {
            order.status = OrderStatus.PAID;
        }
    }

    cancelOrder(orderId: number): void {

        const order = this.findOrder(orderId);

        if (!order) return;

        order.items.forEach(item => {
            item.product.increaseStock(item.quantity);
        });

        order.status = OrderStatus.CANCELLED;
    }

    findOrder(id: number): Order | undefined {
        return this.orders.find(o => o.id === id);
    }

    getOrders(): Order[] {
        return this.orders;
    }

    printOrders(): void {

        this.orders.forEach(order => {

            console.log(
                `Order #${order.id} - ${order.status} - ${order.calculateTotal()}`
            );

        });

    }
}