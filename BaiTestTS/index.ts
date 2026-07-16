import {CustomerService} from './services/CustomerService';
import {EmployeeService} from './services/EmployeeService';
import {ProjectService} from './services/ProjectService';
const employeeService=new EmployeeService();
const customerService=new CustomerService();
const projectService=new ProjectService(employeeService);

const customer=customerService.create({
    name:"ABC Company",
    tax:"123456789",
    address:"Ha Noi"
});

console.log(customer);
const updatedCustomer=customerService.updateById(customer.id,{
    address:"Ho Chi Minh"
});
console.log(updatedCustomer);

const employee1=employeeService.create({
    name:"Nguyen Van A"
});

const employee2=employeeService.create({
    name:"Nguyen Van B"
});

console.log(employee1);
console.log(employee2);

console.log(employeeService.findById(employee1.id));
console.log(employeeService.findById("abc"));

const project=projectService.create({
    customerId:customer.id,
    employeeId:employee1.id
});
projectService.updateById(project.id,{
    employeeId:employee2.id
});

console.log(customerService.updateById("fake", {address:"ABC"}));
console.log(employeeService.updateById("fake",{name:"ABC"}));
console.log(projectService.updateById("fake",{customerId:"ABC"}));
