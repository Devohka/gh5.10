
import { createReducer } from "@reduxjs/toolkit";

import {
   fetchTasks,
  //  deleteTasks
 } from "./operations";
import {
  DeleteTell,
  Addtell,
  Findtell,
  AddUser
} from "./actions";


const state = {
  name: "redux",
  books: [],
  number: 0,
  user: ""
};

export const bookReduser = createReducer(state, builder => {
  builder
    .addCase(Addtell, (state, action) => {
      return {
        ...state,
        
        books:[...state.books, action.payload],

      }
    })
    .addCase(DeleteTell, (state, action) => {
      return {
        ...state,
        
        books: action.payload,

      }
    })
    .addCase(fetchTasks.pending, (state, action) => {
      return {
        ...state,
        
        books: action.payload,

      }
    })
    .addCase(Findtell, (state, action) => {
      return {
        ...state,
        
        books: action.payload,

      }
    }) .addCase(AddUser, (state, action) => {
      return {
        ...state,
        
        user: action.payload

      }
    });

  return state;
});