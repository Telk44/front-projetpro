import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import activityService from './activityService'
import authService from "../auth/authService";

const initialState = {
    activities: [],
    activity:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//create new activity
export const createActivity = createAsyncThunk('activity/createActivity', async (activityData, thunkAPI) => {
    try {
        // const token = thunkAPI.getState().auth.user.token
        return await activityService.createActivity(activityData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createActivity.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createActivity.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createActivity.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = activitySlice.actions
export default activitySlice.reducer