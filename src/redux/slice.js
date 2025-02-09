import { createSlice, } from "@reduxjs/toolkit";




const state = {
  name: "redux",
  books: [
    { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
    { id: 2, name: 'Hermione Kline', number: '443-89-12' },
    { id: 3, name: 'Eden Clements', number: '645-17-79' },
    { id: 4, name: 'Annie Copeland', number: '227-91-26' },
  ]
};

const bookSlice = createSlice({
  name: "BookList",
  initialState: state,
  reducers: {
    Addtell(state, action) {
      return {
        name: "redux",
        books: [...state.books, action.payload],
      };
    },
    Findtell(state, action) {
      return {
        name: "redux",
        books: action.payload,
      };
    },
    DeleteTell(state, action) {
      return {
        name: "redux",
        books: action.payload,
      };
    }
  }
});

export const {Addtell, Findtell, DeleteTell} = bookSlice.actions;
export const bookReduser = bookSlice.reducer;