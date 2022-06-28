import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "../redux/counter/counterSlice";

const reducers = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});

// inferir el tipo de dispatch segun el store
export type AppDispatch = typeof store.dispatch;
//modificar el dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// inferir tipo para selectores
export type RootState = ReturnType<typeof store.getState>;
export default store;
