export const GlobalReducer = (state, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case "REGISTER_FAIL":
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                loading: false,
            };
        case "RESET_ERROR":
            return {
                ...state,
                registerValidationError: {},
                loginValidationError: {},
            };
        default:
            return state;
    }
};
