import React from "react";


function ProductCard({product}){

return (

<div className="product-card">


<div className="discount">
 {product.discount}
</div>


<div className="installment">
 Trả góp 0%
</div>



<img
className="product-image"
src={product.image}
alt={product.name}
/>


<div className="brand">
 {product.brand}
</div>


<h3>
{product.name}
</h3>


<div className="price">

<span>
{product.price}
</span>

<del>
{product.oldPrice}
</del>

</div>



<div className="benefit">

Trợ giá thêm 500.000đ

</div>


<div className="benefit">

0đ phụ phí - Trả trước 0%

</div>



<div className="bottom">


<div className="delivery">

🚚 {product.delivery}

</div>


<div className="rating">

⭐ {product.rating}

</div>


<div className="heart">
trái tim

</div>


</div>



</div>

)

}


export default ProductCard;