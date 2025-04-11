import { createSelector } from "@reduxjs/toolkit";


export const selectorBook = (state) => state.books;

export const selectorUser = (state) => state.user;


export const selectorNumber = (state) => state.number;

export const numberSelector = createSelector(
    [selectorNumber, selectorBook],
    number => {
        return number+= 1;
    }
    );