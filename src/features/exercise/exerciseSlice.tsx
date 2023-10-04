import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { exerciseOptions } from '../../utils/fetchData';

import { StateType, ExerciseType, ExercisesStateType } from "../../utils/tsTypes";

const BASE_URL = 'https://exercisedb.p.rapidapi.com/exercises'

const initialState: ExercisesStateType = {
    exercises: [],
    filteredExercises: [],
    status: 'idle',
    error: null,
}

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async (): Promise<ExerciseType[]> => {
    try{
        const response = await axios.request({...exerciseOptions, url: BASE_URL})
        console.log("Fetching Exercise data...");
        return [...response.data];
    }catch(err){
        console.error(err);
        return []
    }
})

const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        filterExercises: (state, action) => {
            state.filteredExercises = state.exercises.filter((exercise: ExerciseType) => 
        exercise.name.toLowerCase().includes(action.payload.search)
        || exercise.equipment.toLowerCase().includes(action.payload.search)
        || exercise.bodyPart.toLowerCase().includes(action.payload.search)
        || exercise.target.toLowerCase().includes(action.payload.search)
      );
        },
        setExercises: (state, action) => {
            state.filteredExercises = action.payload.exercises;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchExercises.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.exercises = action.payload
            state.filteredExercises = action.payload
        })
    }
})

export const { filterExercises, setExercises } = exerciseSlice.actions;

export const getAllExercises = (state: StateType) => state.exercises.exercises;
export const getFilteredExercises = (state: StateType) => state.exercises.filteredExercises;

export default exerciseSlice.reducer;