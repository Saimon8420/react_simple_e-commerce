import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
    userInfo: [{ name: "saimon", password: "123456", phone: "01521333567", email: "latifulkabir567@gmail.com", address: "dhaka" }],
    currentUser: [],
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const copyUserInfo = current(state.userInfo);
            if (action.payload) {
                const matched = copyUserInfo.find(info => info.email === action.payload.email && info.password === action.payload.password);
                if (matched) {
                    state.currentUser = [matched];
                }
                else {
                    state.currentUser = [];
                }
            }
            else {
                return state;
            }
        },
        signUp: (state, action) => {
            if (action.payload) {
                state.userInfo = [...state.userInfo, action.payload]
            }
            else {
                return state;
            }
        },
        addAddress: (state, action) => {
            // console.log(action.payload);
            if (action.payload) {
                const address = action.payload;
                state.currentUser = state.currentUser.map(user => ({ ...user, address }));
                state.userInfo = [...state.userInfo, state.currentUser[0]];
                const filter = state.userInfo.filter(user => user.email !== state.currentUser[0].email);
                state.userInfo = [...filter, state.currentUser[0]];
            }
            else {
                return state;
            }
        },
        logout: state => {
            state.currentUser = [];
        }
    }
})
export const { login, signUp, addAddress, logout } = authSlice.actions;
export default authSlice.reducer;