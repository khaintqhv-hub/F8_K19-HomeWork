import React from "react";
import Products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList(){
    return (
        <div className="product-area">
            <div className="category">
                <button>Apple</button>
                <button>Samsung</button>
                <button>Xiaomi</button>
                <button>Oppo</button>
                <button>Honor</button>
                <button>Nubia</button>
            </div>
            <div className="product-grid">
                {Products.map(item => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}
export default ProductList;