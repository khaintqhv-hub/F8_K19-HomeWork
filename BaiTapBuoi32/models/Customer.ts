export class Customer {

    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public address: string
    ) {}

    updatePhone(phone: string): void {
        this.phone = phone;
    }

    updateAddress(address: string): void {
        this.address = address;
    }

    toString(): string {
        return `${this.id} - ${this.name} - ${this.phone} - ${this.address}`;
    }
}