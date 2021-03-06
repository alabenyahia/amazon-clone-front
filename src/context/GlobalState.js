import { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

const initialState = {
    token: localStorage.getItem("AMAZON_CLONE-token"),
    user: null,
    isAuthenticated: null,
    loading: true,
    registerValidationError: {},
    loginValidationError: {},
    authError: {},
    serverError: {},
    products: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const BASE_URL = "http://localhost:5000";

    async function registerUser(data) {
        try {
            const rawRes = await fetch(`${BASE_URL}/api/user/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const res = await rawRes.json();
            if (rawRes.status === 200) dispatch({ type: "REGISTER_SUCCESS", payload: res });
            else if (rawRes.status === 500) {
                dispatch({
                    type: "REGISTER_FAIL",
                    payload: { serverError: "Something went wrong" },
                });
            } else dispatch({ type: "REGISTER_FAIL", payload: res });
        } catch (err) {
            dispatch({
                type: "REGISTER_FAIL",
                payload: { serverError: "Something went wrong" },
            });
        }
    }

    async function loginUser(data) {
        try {
            const rawRes = await fetch(`${BASE_URL}/api/user/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const res = await rawRes.json();
            if (rawRes.status === 200) dispatch({ type: "LOGIN_SUCCESS", payload: res });
            else if (rawRes.status === 500) {
                dispatch({
                    type: "LOGIN_FAIL",
                    payload: { serverError: "Something went wrong" },
                });
            } else dispatch({ type: "REGISTER_FAIL", payload: res });
        } catch (err) {
            dispatch({
                type: "LOGIN_FAIL",
                payload: { serverError: "Something went wrong" },
            });
        }
    }

    function logout() {
        dispatch({ type: "USER_LOGOUT" });
    }

    async function loadUser() {
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const token = localStorage.getItem("AMAZON_CLONE-token");
            if (token) headers["auth-token"] = token;
            const rawRes = await fetch(`${BASE_URL}/api/user/`, {
                method: "GET",
                headers,
            });
            const res = await rawRes.json();
            if (rawRes.status === 200) {
                dispatch({ type: "USER_LOAD_SUCCESS", payload: res });
            } else if (rawRes.status === 500) {
                dispatch({
                    type: "USER_LOAD_FAIL",
                    payload: { serverError: "Something went wrong" },
                });
            } else {
                dispatch({
                    type: "USER_LOAD_FAIL",
                    payload: res,
                });
            }
        } catch (err) {
            dispatch({
                type: "USER_LOAD_FAIL",
                payload: { serverError: "Something went wrong" },
            });
        }
    }

    async function loadAllProducts() {
        const rawRes = await fetch(`${BASE_URL}/api/product`, {
            method: "GET",
        });
        const res = await rawRes.json();
        if (rawRes.status === 200) {
            dispatch({ type: "PRODUCTS_LOAD_SUCCESS", payload: res });
        }
    }

    async function addToCart(productid) {
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const token = localStorage.getItem("AMAZON_CLONE-token");
            if (token) headers["auth-token"] = token;
            const rawRes = await fetch(`${BASE_URL}/api/user/addtocart`, {
                method: "POST",
                headers,
                body: JSON.stringify({ productid }),
            });
            const res = await rawRes.json();
            if (rawRes.status === 200) {
                dispatch({ type: "ADD_TO_CART_SUCCESS", payload: res });
            }
        } catch (err) {}
    }

    async function removeFromCart(productid) {
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const token = localStorage.getItem("AMAZON_CLONE-token");
            if (token) headers["auth-token"] = token;
            const rawRes = await fetch(`${BASE_URL}/api/user/removefromcart`, {
                method: "POST",
                headers,
                body: JSON.stringify({ productid }),
            });
            const res = await rawRes.json();
            if (rawRes.status === 200) {
                dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: res });
            }
        } catch (err) {}
    }

    async function clearCart() {
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const token = localStorage.getItem("AMAZON_CLONE-token");
            if (token) headers["auth-token"] = token;
            const rawRes = await fetch(`${BASE_URL}/api/user/clearcart`, {
                method: "POST",
                headers,
            });
            const res = await rawRes.json();
            if (rawRes.status === 200) {
                dispatch({ type: "CLEAR_CART_SUCCESS", payload: res });
            }
        } catch (err) {}
    }

    function resetError() {
        dispatch({ type: "RESET_ERROR" });
    }

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                registerUser,
                resetError,
                loginUser,
                loadAllProducts,
                loadUser,
                logout,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
