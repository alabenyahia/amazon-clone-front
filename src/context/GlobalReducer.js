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
        default:
            return state;
    }
};
