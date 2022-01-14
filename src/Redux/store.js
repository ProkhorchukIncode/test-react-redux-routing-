import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./loadingSlice";

const store = configureStore({
    reducer: {
        main: loadingReducer
    },
})

export default store