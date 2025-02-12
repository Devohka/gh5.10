// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";
import { bookReduser } from "./reducer";
// import { persistStore, persistReducer } from 'redux-persist';

export const store = configureStore({
    reducer: bookReduser,

});



