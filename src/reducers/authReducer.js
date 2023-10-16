const initialState = {
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true };
        case 'LOGIN_FAILURE':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
}
