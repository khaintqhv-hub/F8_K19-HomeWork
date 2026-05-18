// --- DATASETS ---
const employees = [
   { id: 1, name: "Alice", age: 23, status: 'working' },
   { id: 3, name: "Bob", age: 25, status: 'working' },
   { id: 6, name: "John", age: 27, status: 'working' },
   { id: 8, name: "David", age: 23, status: 'quit_job' },
   { id: 10, name: "Eve", age: 20, status: 'working' },
];

const products = [
   { id: 1, name: "Phone", price: 1200 },
   { id: 2, name: "Laptop", price: 3000  },
   { id: 3, name: "Tab", price: 2000  },
   { id: 4, name: "PC", price: 800  },
   { id: 5, name: "Monitor", price: 1500  },
];

const orders = [
   { id: 1, employeeId: 1, productId: 4, quantity: 1 },
   { id: 2, employeeId: 3, productId: 2, quantity: 4 },
   { id: 3, employeeId: 1, productId: 5, quantity: 3 },
   { id: 4, employeeId: 6, productId: 1, quantity: 2 },
   { id: 5, employeeId: 3, productId: 5, quantity: 3 },
   { id: 6, employeeId: 8, productId: 1, quantity: 1 },
   { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

//Find first object with max value of a key
function findMaxBy(list, key){
    let maxItem=list[0];
    for(let i=1;i<list.length;i++){
        if(list[i][key]>maxItem[key]){
            maxItem=list[i];
        }
    }
    return maxItem;
}

//Find first object with min value of a key
function findMinBy(list, key){
    let minItem=list[0];
    for(let i=1;i<list.length;i++){
        if(list[i][key]<minItem[key]){
            minItem=list[i];
        }
    }
    return minItem;
}

// Bai 1: Employees currently working
function getWorkingEmployees(employeeList){
    return employeeList.filter(employee=>employee.status==='working');
}

// Bai 2: Oldest employee 
function getOldestEmployee(employeeList){
    return findMaxBy(employeeList, 'age');
}

// Bai 3: Cheapest product
function getCheapestProduct(productList){
    return findMinBy(productList,'price');
}

//Bai 4: Best selling product(by quantity) - BUG FIXED
function getBestSellingProduct(orderList, productList){
    const productCountMap={};
    for(const order of orderList){
        if(!productCountMap[order.productId]) productCountMap[order.productId]=0; // FIXED HERE
        productCountMap[order.productId]+=order.quantity;
    }

    let bestProductId=null;
    let maxQuantity=0;
    for(const proId in productCountMap){
        if(productCountMap[proId]>maxQuantity){
            maxQuantity=productCountMap[proId];
            bestProductId=parseInt(proId);
        }
    }
    return productList.find(pro=>pro.id===bestProductId);
}

//Calculate total sales (quantity*price) per productId
function calculateRevenueProduct(orderList, productList){
    const revenueProductMap={};
    for(const order of orderList){
        const product=productList.find(pro=>pro.id===order.productId);
        if(!product) continue;
        if(!revenueProductMap[order.productId]) revenueProductMap[order.productId]=0;
        revenueProductMap[order.productId]+=order.quantity*product.price;
    }
    return revenueProductMap;
}

//Calculate total quantity sold per employee
function calculateEmployeeQuantity(orderList){
    const quantityMap={};
    for(const order of orderList){
        if(!quantityMap[order.employeeId]) quantityMap[order.employeeId]=0;
        quantityMap[order.employeeId]+=order.quantity;
    }
    return quantityMap;
}

//Calculate total revenue per employee
function calculateEmployeeRevenue(orderList, productList){
    const revenueMap={};
    for(const order of orderList){
        const product=productList.find(pro=>pro.id===order.productId);
        if(!product) continue;
        if(!revenueMap[order.employeeId]) revenueMap[order.employeeId]=0;
        revenueMap[order.employeeId]+=order.quantity*product.price;
    }
    return revenueMap;
}

//Bai 5: Product with highest revenue
function getProductWithHighestRevenue(orderList, productList){
    const revenue=calculateRevenueProduct(orderList, productList);
    let bestId=null;
    let maxRevenue=0;
    for(const proId in revenue){
        if(revenue[proId]>maxRevenue){
            maxRevenue=revenue[proId];
            bestId=parseInt(proId);
        }
    }
    return productList.find(pro=>pro.id===bestId);
}

//Bai 6: Employee who sold most items (by quantity)
function getEmployeeWithMostQuantity(orderList, employeeList){
    const quantity=calculateEmployeeQuantity(orderList);
    let bestId=null;
    let maxQuantity=0;
    for(const id in quantity){
        if(quantity[id]>maxQuantity){
            maxQuantity=quantity[id];
            bestId=parseInt(id);
        }
    }
    return employeeList.find(e=>e.id===bestId);
}

//Bai 7: Employee with highest revenue
function getEmployeeWithHighestRevenue(orderList, productList, employeeList){
    const revenue=calculateEmployeeRevenue(orderList, productList);
    let bestId=null;
    let maxRevenue=0;
    for(const id in revenue){
        if(revenue[id]>maxRevenue){
            maxRevenue=revenue[id];
            bestId=parseInt(id);
        }
    }
    return employeeList.find(e=>e.id===bestId);
}

//Bai 8: Best-selling product per employee
function getBestSellingProductPerEmployee(orderList, productList, employeeList){
    const result={};
    for(const emp of employeeList){
        const empOrders=orderList.filter(order=>order.employeeId===emp.id);
        let bestId=null;
        let maxRevenue=0;
        for(const order of empOrders){
            const prod=productList.find(pro=>pro.id===order.productId);
            const rev=order.quantity*prod.price;
            if(rev>maxRevenue){
                maxRevenue=rev;
                bestId=prod.id;
            }
        }
        result[emp.name]=productList.find(pro=>pro.id===bestId)?.name||null;
    }
    return result;
}

//Bai 9: Commission 3%
function calculateEmployeeCommission(orderList, productList, employeeList, rate=0.03){
    const revenue=calculateEmployeeRevenue(orderList, productList);
    let commission={};
    for(const emp of employeeList){
        commission[emp.name]=(revenue[emp.id]||0)*rate;
    }
    return commission;
}

//Bai 10:Employee sorted by descending revenue
function sortEmployeesByRevenue(orderList, productList, employeeList){
    const revenue=calculateEmployeeRevenue(orderList, productList);
    return [...employeeList].sort((a,b)=> (revenue[b.id]||0)-(revenue[a.id]||0)).map(emp=>({name:emp.name, revenue:revenue[emp.id]||0}));
}

//--- TEST OUTPUTS ---
console.log("Bai 1- Working Employees:", getWorkingEmployees(employees));
console.log("Bai 2 -Oldest Employee:", getOldestEmployee(employees));
console.log("Bai 3- Cheapest Product:", getCheapestProduct(products));
console.log("Bai 4- Best Selling Product:", getBestSellingProduct(orders, products));
console.log("Bai 5- Product with highest revenue:", getProductWithHighestRevenue(orders, products));
console.log("Bai 6 -Employee with most quantity sold:", getEmployeeWithMostQuantity(orders, employees));
console.log("Bai 7- Employee with highest revenue:", getEmployeeWithHighestRevenue(orders, products, employees));
console.log("Bai 8- Best selling product per employee:", getBestSellingProductPerEmployee(orders, products, employees));
console.log("Bai 9- Employee commission:", calculateEmployeeCommission(orders, products, employees));
console.log("Bai 10-Employees sorted by revenue:", sortEmployeesByRevenue(orders, products, employees));