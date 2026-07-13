import { Product } from "../models/Product";

export class ProductService {

    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    updateProduct(id: number, data: Partial<Product>): void {
        const product = this.findById(id);

        if (product) {
            Object.assign(product, data);
        }
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(p => p.id !== id);
    }

    findById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    findByName(keyword: string): Product[] {
        return this.products.filter(p =>
            p.name.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    printProducts(): void {
        this.products.forEach(p => console.log(p.toString()));
    }
}