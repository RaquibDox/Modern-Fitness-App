import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "../features/exercise/exerciseSlice";

const store = configureStore({
    reducer: {
        exercises: exerciseSlice,
    },
})

export default store;