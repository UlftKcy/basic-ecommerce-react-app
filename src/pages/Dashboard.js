import React, { useEffect, useState } from "react";
import Products from "../component/Products";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";


const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios(url);
            const productsData = await response.data;
            const products = await productsData.drinks;
            setProducts(products);
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Products products={products} />
        </>
    )
};
export default Dashboard;