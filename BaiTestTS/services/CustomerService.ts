import {Customer} from '../entities/Customer';
import {generateId} from '../utils/utils'; 
export class CustomerService{
 private customers:Customer[]=[];
 create(
    customer:Omit<Customer,"id">):Customer{
        const newCustomer:Customer={
            id:generateId(),
            ...customer
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

    updateById(
        id:string,
        data:Partial<Customer>
    ):Customer|null{
        const customer=this.customers.find(c=>c.id===id);
        if(!customer){
            return null;
        }
       Object.assign(customer,data);
       return customer;
    }
}
