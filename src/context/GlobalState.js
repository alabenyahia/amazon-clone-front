import { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

const initialState = {
    user: null,
    isAuthenticated: null,
    loading: true,
    registerValidationError: {},
    loginValidationError: {},
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

    function resetError() {
        dispatch({ type: "RESET_ERROR" });
    }

    return (
        <GlobalContext.Provider value={{ ...state, registerUser, resetError, loginUser }}>
            {children}
        </GlobalContext.Provider>
    );
};
