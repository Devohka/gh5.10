
import { createReducer } from "@reduxjs/toolkit";

import {
   fetchTasks,
  //  deleteTasks
 } from "./operations";
import {
  DeleteTell,
  Addtell,
  Findtell,
  
} from "./actions";


const state = {
  name: "redux",
  books: [],
  number: 0,
};

export const bookReduser = createReducer(state, builder => {
  builder
    .addCase(Addtell, (state, action) => {
      return {
        name: "redux",
        books:[...state.books, action.payload],
        number: state.number,
      }
    })
    .addCase(DeleteTell, (state, action) => {
      return {
        name: "redux",
        books: action.payload,
        number: state.number,
      }
    })
    .addCase(fetchTasks.pending, (state, action) => {
      return {
        name: "redux",
        books: action.payload,
        number: state.number,
      }
    })
    .addCase(Findtell, (state, action) => {
      return {
        name: "redux",
        books: action.payload,
        number: state.number,
      }
    });

  return state;
});