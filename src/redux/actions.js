
import { createAction } from "@reduxjs/toolkit";


export const DeleteTell = createAction("DeleteBook", array => {
    return {
        payload: array,
    };
});

// export const FetchTell = createAction("FetchBook", array => {
//     return {
//         payload: array,
//     };
// });

export const Addtell = createAction("AddBook", array => {
    return {
        payload: array,
    };
});

export const Findtell = createAction("FindBook", array => {
    return {
        payload: array,
    };
});