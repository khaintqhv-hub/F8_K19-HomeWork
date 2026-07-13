export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public stock: number
    ) {}

    increaseStock(quantity: number): void {
        this.stock += quantity;
    }

    decreaseStock(quantity: number): boolean {
        if (quantity > this.stock) return false;

        this.stock -= quantity;
        return true;
    }

    toString(): string {
        return `${this.id} - ${this.name} - ${this.price} - Stock: ${this.stock}`;
    }
}