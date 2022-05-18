import React, { useContext, useEffect } from 'react';
import { MainContext } from '../Context';
import styled from 'styled-components';

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
const ItemName = styled.div`
    display:flex;
    align-items:center;
`
const ItemCategory = styled.div`
    display:flex;
    align-items:center;
`

const Basket = () => {
    const {items, setItems } = useContext(MainContext);
    
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('items'));
        if(items){
            setItems(items);
        }
    },[]);

    return (
        <>
            {items.map((item, id) => (
                <BasketItemRow key={id}>
                    <ItemId>{item.id}</ItemId>
                    <ItemImage src={item.image} />
                    <ItemName>{item.name}</ItemName>
                    <ItemCategory>{item.category}</ItemCategory>
                </BasketItemRow>
            ))}
        </>
    )
}

export default Basket