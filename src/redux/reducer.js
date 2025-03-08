
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
  books: []
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
    .addCase(fetchTasks.pending, (state, action) => {
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