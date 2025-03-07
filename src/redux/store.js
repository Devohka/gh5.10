// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";

import { bookReduser } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, bookReduser)
// import { persistStore, persistReducer } from 'redux-persist';

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

