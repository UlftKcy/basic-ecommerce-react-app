import React from "react";


const Products = ({ products }) => {
    console.log(products)
    return (
        <>
           {products.map((product)=>(
               <div key={product.idDrink}>{product.strDrink}</div>
           ))}
        </>
    )
};

export default Products;