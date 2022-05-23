import React, { useEffect, useState } from "react";
import Products from "../component/Products";
import axios from "axios";
import styled from "styled-components";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const Container = styled.div`
    min-height:100vh;
    margin:auto;
    padding:20px;
    background-color:#191A19;
`

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
            throw new Error('Something went wrong!',{cause:error});
        }
    }
    return (
        <Container>
            <Products products={products} />
        </Container>
    )
};
export default Dashboard;