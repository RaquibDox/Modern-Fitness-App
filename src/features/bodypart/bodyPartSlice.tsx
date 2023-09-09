/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { exerciseOptions } from '../../utils/fetchData';

import { BodyPartStateType, BodyPartInitialType } from "../../utils/tsTypes";

const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'

const initialState: BodyPartInitialType = {
    bodyPart: [],
    status: 'idle',
    error: null,
}

export const fetchBodyPart = createAsyncThunk('bodyPart/fetchBodyPart', async (): Promise<string[]> => {
    try{
        const response = await axios.request({...exerciseOptions, url: BASE_URL})
        console.log(response.data);
        return [...response.data];
    }catch(err){
        console.error(err);
        return []
    }
})

const bodyPartSlice = createSlice({
    name: 'bodyPart',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBodyPart.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.bodyPart = action.payload
        })
    }
})

export const getBodyParts = (state: BodyPartStateType) => state.bodyPart.bodyPart;

export default bodyPartSlice.reducer;