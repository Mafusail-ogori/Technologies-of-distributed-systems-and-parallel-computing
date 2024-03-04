import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeResult } from "../models/TimeResult";

const manualNumbersInitialState: number[] = [];
const timeResultsInitialState: TimeResult[] = [];
const amountInitialState: number = 0;

const numberSlice = createSlice({
  name: "manualNumbers",
  initialState: {
    numbers: manualNumbersInitialState,
    amount: amountInitialState,
    sourceFile: null,
    timeResults: timeResultsInitialState,
    status: true,
  },
  reducers: {
    setResultTime(state, action: PayloadAction<{ timeResults: TimeResult[] }>) {
      state.timeResults = action.payload.timeResults;
    },
    setNumbers(state, action: PayloadAction<{ numbers: number[] }>) {
      state.numbers = action.payload.numbers;
    },
    setAmount(state, action: PayloadAction<{ amount: number }>) {
      state.amount = action.payload.amount;
    },
    setFile(state, action: PayloadAction<{ file: any }>) {
      state.sourceFile = action.payload.file;
    },
    setStatus(state, action: PayloadAction<{ status: boolean }>) {
      state.status = action.payload.status;
    },
  },
});

export const numberActions = numberSlice.actions;
export default numberSlice;
