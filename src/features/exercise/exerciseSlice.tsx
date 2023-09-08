/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { exerciseOptions, youtubeOptions } from '../../utils/fetchData';

const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises'

const initialState = {
    exercises: [],
    status: 'idle',
    error: null,
}

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async () => {
    try{
        const response = await axios.request({...exerciseOptions, url: BASE_URL})
        console.log(response.data);
        return [...response.data]
    }catch(err){
        console.error(err);
    }
})

const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchExercises.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.exercises.push(action.payload)
        })
    }
})

export const getAllExercises = (state) => state.exercises.exercises;

export default exerciseSlice.reducer;