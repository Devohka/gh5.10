import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


const state = {
    name: "redux",
    books: [
        { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
        { id: 2, name: 'Hermione Kline', number: '443-89-12' },
        { id: 3, name: 'Eden Clements', number: '645-17-79' },
        { id: 4, name: 'Annie Copeland', number: '227-91-26' },
      ]
};




const reduser = (state, action) => {
    console.log(action.type);
    if(action.type === "AddTell") {
        return {
            name: "redux",
            books: [...state.books, action.payload],
        };
    } else if (action.type === "DeleteTell") {
        return {
            name: "redux",
            books: action.payload,
        };
    } else if(action.type === "FindTell") {
      return  {
            name: "redux",
            books: action.payload,
        };
    }
    return state;

};
const store = createStore(reduser, state, composeWithDevTools());
// store.dispatch({ type: "addNumber", payload: 5 }); цю дію в компоненті робить хук useDispatch
// store.dispatch({ type: "minusNumber", payload: 2 }); 

export default store;