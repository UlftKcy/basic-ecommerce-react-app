import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 45px;
`
const Card = styled.div`
    width:220px;
    height:220px;
    padding:10px;
    position:relative;
    background-color:#420516;
    border-radius: 8px;
`

const Image = styled.img`
    width:100%;
    height:100%;
    border-radius: 8px;
`

const CardBody = styled.div`
    width:100%;
    position:absolute;
    bottom:10px;
    left:0;
    right:0;
    color:#ffff;
    background-color:#420516;
`
const CardTitle = styled.div`
    font-weight:bold;
    padding:5px;
`
const CardContent = styled.div`
    padding:5px;  
`

const BasketButton = styled.div`
    position:absolute;
    right:-10px;
    bottom:-10px;
    background-color:420516;
`

const Button = styled.button`
    padding:0;
    background-color:transparent;
    color:#ffff;
    border:0;
    cursor:pointer;

    &:hover{
        color:#77D970;
    }
`


const Products = ({ products }) => {
    console.log(products)
    return (
        <CardContainer>
            {products.map((product) => (
                <Card>
                    <Image src={product.strDrinkThumb} />
                    <CardBody>
                        <CardTitle>
                            {product.strDrink}
                        </CardTitle>
                        <CardContent>
                            Category : {product.strCategory}
                        </CardContent>
                    </CardBody>
                    <BasketButton>
                        <Button><FaPlusCircle style={{fontSize:"1.5rem"}}/></Button>
                    </BasketButton>
                </Card>
            ))}
        </CardContainer>
    )
};

export default Products;