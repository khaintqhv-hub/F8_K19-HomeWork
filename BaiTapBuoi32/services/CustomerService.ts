import { Customer } from "../models/Customer";

export class CustomerService {

    private customers: Customer[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    updateCustomer(id: number, data: Partial<Customer>): void {
        const customer = this.findById(id);

        if (customer) {
            Object.assign(customer, data);
        }
    }

    deleteCustomer(id: number): void {
        this.customers = this.customers.filter(c => c.id !== id);
    }

    findById(id: number): Customer | undefined {
        return this.customers.find(c => c.id === id);
    }

    findByPhone(phone: string): Customer | undefined {
        return this.customers.find(c => c.phone === phone);
    }

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    printCustomers(): void {
        this.customers.forEach(c => console.log(c.toString()));
    }
}