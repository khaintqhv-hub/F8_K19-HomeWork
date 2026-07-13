import { Product } from "./BaiTapBuoi32/models/Product";
import { Customer } from "./BaiTapBuoi32/models/Customer";

import { ProductService } from "./BaiTapBuoi32/services/ProductService";
import { CustomerService } from "./BaiTapBuoi32/services/CustomerService";
import { OrderService } from "./BaiTapBuoi32/services/OrderService";

const productService = new ProductService();
const customerService = new CustomerService();
const orderService = new OrderService(productService);

// Products
productService.addProduct(new Product(1, "Laptop", 20000, 10));
productService.addProduct(new Product(2, "Mouse", 500, 30));
productService.addProduct(new Product(3, "Keyboard", 800, 20));

// Customer
const customer = new Customer(1, "Nguyen Van A", "0123456789", "Ha Noi");
customerService.addCustomer(customer);

// Create order
const order = orderService.createOrder(customer);

orderService.addProduct(order.id, 1, 1);
orderService.addProduct(order.id, 2, 2);

order.printInvoice();

orderService.checkout(order.id);

console.log("\nDanh sách đơn hàng:");
orderService.printOrders();

console.log("\nDanh sách sản phẩm:");
productService.printProducts();