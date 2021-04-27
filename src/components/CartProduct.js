import React, { useContext } from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { GlobalContext } from "../context/GlobalState";

function CartProduct({ _id: id, image, name, price, rating }) {
    const { removeFromCart } = useContext(GlobalContext);
    return (
        <Container>
            <ProductImg src={image} />
            <ProductDetailsContainer>
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
                <DeleteBtn onClick={() => removeFromCart(id)}>Delete</DeleteBtn>
            </ProductDetailsContainer>
        </Container>
    );
}

export default CartProduct;

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #ddd;
`;

const ProductImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
    align-self: center;

    @media screen and (max-width: 720px) {
        width: 130px;
        height: 130px;
    }

    @media screen and (max-width: 520px) {
        width: 120px;
        height: 120px;
    }

    @media screen and (max-width: 400px) {
        width: 100px;
        height: 100px;
    }
`;

const ProductDetailsContainer = styled.div`
    margin-left: 20px;
`;

const Title = styled.h3`
    font-size: 18px;
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
`;

const DeleteBtn = styled.button`
    background: none;
    border: none;
    outline: none;
    color: #007185;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
