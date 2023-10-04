import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { exerciseOptions } from '../../utils/fetchData';

import { BodyPartStateType, BodyPartInitialType } from "../../utils/tsTypes";

const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'

const initialState: BodyPartInitialType = {
    bodyParts: [],
    bodyPart: 'all',
    status: 'idle',
    error: null,
}

export const fetchBodyParts = createAsyncThunk('bodyParts/fetchBodyParts', async (): Promise<string[]> => {
    try{
        const response = await axios.request({...exerciseOptions, url: BASE_URL})
        console.log("Fetching BodyParts data...");
        return [...response.data];
    }catch(err){
        console.error(err);
        return []
    }
})

const bodyPartSlice = createSlice({
    name: 'bodyParts',
    initialState,
    reducers: {
        changeBodyPart: (state, action) => {
            state.bodyPart = action.payload.bodyPart;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchBodyParts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.bodyParts = action.payload
        })
    }
})

export const { changeBodyPart } = bodyPartSlice.actions;

export const getBodyParts = (state: BodyPartStateType) => state.bodyParts.bodyParts;
export const getBodyPart = (state: BodyPartStateType) => state.bodyParts.bodyPart;

export default bodyPartSlice.reducer;