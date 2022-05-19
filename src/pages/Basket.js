import React, { useContext, useEffect } from 'react';
import { MainContext } from '../Context';
import styled from 'styled-components';
import emptybasket from "../assets/emptybasket.svg";

const BasketItemRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin:30px 60px;
    padding:5px 20px;
    border:1px solid #77D970;
    border-radius:10px;
`
const ItemId = styled.div`
    display:flex;
    align-items:center;
    font-weight:bold;
`
const ItemImage = styled.img`
   width:50px;
   height:50px;
   display:flex;
   align-items:center;
`
const ItemDescription = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const ItemName = styled.div`
    display:flex;
    align-items:center;
    font-weight:bolder;
`
const ItemCategory = styled.span`
    font-size:12px;
    font-weight:light;
`

const ItemCount = styled.div`
    display:flex;
    align-items:center;
`
const EmptyBasket = styled.img`
    margin:auto;
    margin-top:30px;
    width:200px;
    height:200px;
`

const Basket = () => {
    const { items, setItems } = useContext(MainContext);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }, []);

    return (
        <>
            {items.length > 0 ?
                items.map((item, id) => (
                    <BasketItemRow key={id}>
                        <ItemId>{item.id}</ItemId>
                        <ItemImage src={item.image} />
                        <ItemDescription>
                            <ItemName>{item.name}</ItemName>
                            <ItemCategory>{item.category}</ItemCategory>
                        </ItemDescription>
                        <ItemCount>{item.count}</ItemCount>
                    </BasketItemRow>
                ))
                : <EmptyBasket src={emptybasket}/>}

        </>
    )
}

export default Basket