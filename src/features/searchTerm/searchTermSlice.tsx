import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { exerciseOptions } from '../../utils/fetchData';

import { SearchInitialType, SearchStateType } from "../../utils/tsTypes";

const BASE_URL = ['https://exercisedb.p.rapidapi.com/exercises/targetList', 'https://exercisedb.p.rapidapi.com/exercises/equipmentList']

const initialState: SearchInitialType= {
    searchTerms: [],
    status: 'idle',
    error: null,
}

export const fetchSearchTerms = createAsyncThunk('searchTerms/fetchSearchTerms', async (): Promise<string[]> => {
    try{
        const targetList = await axios.request({...exerciseOptions, url: BASE_URL[0]})
        const equipmentList = await axios.request({...exerciseOptions, url: BASE_URL[1]})
        console.log("Fetching targetList and equipmentList data...");
        return [...targetList.data, ...equipmentList.data];
    }catch(err){
        console.error(err);
        return []
    }
})

const searchTermSlice = createSlice({
    name: 'searchTerms',
    initialState,
    reducers: {
        addToSearchTerms: (state, action) => {
            const terms = [...state.searchTerms, ...action.payload.extraTerms];
            state.searchTerms = terms.filter((val, idx, arr) => idx == arr.indexOf(val)).sort();//removing duplicates
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchSearchTerms.fulfilled,
            (state, action) => {
                state.status = 'succeeded'
                const terms = [...state.searchTerms, ...action.payload];
                state.searchTerms = terms.filter((val, idx, arr) => idx == arr.indexOf(val)).sort();
            })
    }
})

export const { addToSearchTerms } = searchTermSlice.actions;

export const getSearchTerms = (state: SearchStateType) => state.searchTerms.searchTerms;

export default searchTermSlice.reducer;