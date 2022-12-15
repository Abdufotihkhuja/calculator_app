import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
    calcResult: number | null;
    calcResult1: number | null;
}

const initialState: CalculatorState = {
    calcResult: 0,
    calcResult1: 0,
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        resolve: (state: CalculatorState, action: PayloadAction<string>) => {
            console.log(action.payload);

            // state.calcResult = stringMath(action.payload);
        },
        resolve1: (state: CalculatorState, action: PayloadAction<string>) => {
            console.log(action.payload);
        },
    },
});

export const { resolve, resolve1 } = calculatorSlice.actions;
export default calculatorSlice.reducer;
