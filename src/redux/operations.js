import { createAsyncThunk } from "@reduxjs/toolkit";
// import {  useDispatch } from "react-redux";

// const dispatch = useDispatch();
import axios from "axios";

axios.defaults.baseURL = "https://67b057b5dffcd88a6788f523.mockapi.io/middleware";

export const fetchTasks = createAsyncThunk(
    "FetchTell",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/TellBook");
            return response.data;
        } catch (e) {
            console.log(e.message);
        }
    }

    // fetch ("https://67b057b5dffcd88a6788f523.mockapi.io/middleware/TellBook")
    // .then(data => data.json())
    // .then(data => {
    //     console.log(data);
    //     return data;
    // })
    // .catch(erorr => {
    //     console.log(erorr)
    // })
);

console.log(fetchTasks())