import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer:{
        counter:counterSlice,
        users:usersSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;