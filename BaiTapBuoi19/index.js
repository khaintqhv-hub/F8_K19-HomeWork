const products=[
    {id:1, name:'iPhone', price:2000},
    {id:2, name:'Samsung', price:1500},
    {id:3, name:'Xiaomi', price:1000},
    {id:4, name:'Oppo', price:1200}
]
const orders=[
    {id:1,
     items:[
        {productId:1, quantity:2},
        {productId:2, quantity:1}
    ]
    },
    {id:2,
     items:[
        {productId:1, quantity:1},
        {productId:3, quantity:3}
     ]
    },
    {id:3,
     items:[
        {productId:2, quantity:2},
        {productId:4, quantity:1}
     ]
    }
]

function findProductWithHighestRevenue(products, orders){
    let maxRevenue=0;
    let bestProduct=null;

    for(let i=0;i< products.length;i++){
        let product=products[i];
        let totalRevenue=0;
        for(let j=0;j<orders.length;j++){
            let order=orders[j];

            for(let k=0;k<orders.items.length;k++){
                let item=order.items[k];
                
                if(item.productId===product.id){
                    totalRevenue+= product.price*item.quantity;
                }
            }
        }

        if(totalRevenue>maxRevenue){
            maxRevenue=totalRevenue;
            bestProduct=product;
        }
    }

    return{
        product:bestProduct,
        revenue:maxRevenue
    };
}

const result=findProductWithHighestRevenue(products, orders);
console.log(resutl);