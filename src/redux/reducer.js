
import { createReducer } from "@reduxjs/toolkit";


import {
  DeleteTell,
  Addtell,
  Findtell
} from "./actions";


const state = {
  name: "redux",
  books: [
    { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
    { id: 2, name: 'Hermione Kline', number: '443-89-12' },
    { id: 3, name: 'Eden Clements', number: '645-17-79' },
    { id: 4, name: 'Annie Copeland', number: '227-91-26' },
  ]
};

export const bookReduser = createReducer(state, builder => {
  builder
    .addCase(Addtell, (state, action) => {
      return {
        name: "redux",
        books:[...state.books, action.payload],
      }
    })
    .addCase(DeleteTell, (state, action) => {
      return {
        name: "redux",
        books: action.payload,
      }
    })
    .addCase(Findtell, (state, action) => {
      return {
        name: "redux",
        books: action.payload,
      }
    });

  return state;
});