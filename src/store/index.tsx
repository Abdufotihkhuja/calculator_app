import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const value = (state: RootState) => state.calculator.calcResult;
export const value1 = (state: RootState) => state.calculator.calcResult1;
