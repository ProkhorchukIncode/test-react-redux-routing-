import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

// import userListReducer from "./users/userListSlice";
// import userReducer from "./users/userSlice";

// const reduser = (state ={}, action) => state = action

import loadingSlice from "./loadingSlice";

const store = configureStore({
    reducer: {
        main: loadingSlice
    },
})

export default store