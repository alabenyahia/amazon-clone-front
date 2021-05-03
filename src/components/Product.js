import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Product({ _id: id, image, name, price, rating }) {
    const { addToCart, isAuthenticated } = useContext(GlobalContext);
    const history = useHistory();
    const handleAddToCart = () => {
        if (isAuthenticated) addToCart(id);
        else history.push("/login");
    };
    return (
        <Container>
            <Title>{name}</Title>
            <Price>
                <CurrencyFormat
                    value={price}
                    displayType="text"
                    thousandSeparator={true}
                    decimalScale={2}
                    prefix={"$"}
                />
            </Price>
            <RatingContainer>
                {rating > 0 &&
                    new Array(parseInt(rating)).fill("⭐").map((star) => <span>{star}</span>)}
            </RatingContainer>
            <ProductImg src={image} />
            <AddToCartBtn onClick={handleAddToCart}>Add to cart</AddToCartBtn>
        </Container>
    );
}

export default Product;

const Container = styled.div`
    background-color: white;
    flex: 1;
    padding: 24px 18px;
    z-index: 10;
    min-width: 240px;
    text-align: center;
`;
const Title = styled.h3`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    word-break: break-word;
`;
const Price = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin: 4px 0;
`;

const RatingContainer = styled.div`
    margin-bottom: 8px;
    min-height: 30px;
`;
const ProductImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    align-self: center;

    @media screen and (max-width: 880px) {
        width: 160px;
        height: 160px;
    }
    @media screen and (max-width: 720px) {
        width: 130px;
        height: 130px;
    }
`;

const AddToCartBtn = styled.button`
    background: #f0c14b;
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border-color: #a88734 #9c7e31 #846a29;
    border-width: 1px;
    border-style: solid;
    outline: none;
    cursor: pointer;
    padding: 7px 14px;
    border-radius: 3px;
    margin-top: 8px;

    &:hover {
        background: linear-gradient(to bottom, #f5d78e, #eeb933);
    }
    &:active {
        background-color: #f0c14b;
        box-shadow: 0 1px 3px rgb(0 0 0 / 20%) inset;
    }
    &:focus {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
`;
