// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";
import { bookReduser } from "./slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, bookReduser)

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

// const reduser = (state, action) => {
//     console.log(action.type);
//     if(action.type === "AddTell") {
//         return {
//             name: "redux",
//             books: [...state.books, action.payload],
//         };
//     } else if (action.type === "DeleteTell") {
//         return {
//             name: "redux",
//             books: action.payload,
//         };
//     } else if(action.type === "FindTell") {
//       return  {
//             name: "redux",
//             books: action.payload,
//         };
//     }
//     return state;

// };
// const store = createStore(reduser, state, composeWithDevTools());
// store.dispatch({ type: "addNumber", payload: 5 }); цю дію в компоненті робить хук useDispatch
// store.dispatch({ type: "minusNumber", payload: 2 }); 

