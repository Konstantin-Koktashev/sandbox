import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import firebase from '../../app/fireStore'
import { handleLoading, handleError } from '../services/reducerServices';

const db = firebase.firestore();


export const creatNewUser = createAsyncThunk(
    'firbase/addNewUser',
    async (user, { getState, requestId, }) => {
        
        const { currentRequestId, loading } = getState().auth
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        const userRef = db.collection('users').add(user);  
        return userRef
    }
)

export const authSlice = createSlice({
    name: 'users',
    initialState: {
        currUser: null,
        loading: 'idle',
        currentRequestId: undefined,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [creatNewUser.pending]:handleLoading,
        [creatNewUser.rejected]:handleError,
        [creatNewUser.fulfilled]:(state,action)=>{
            state.currUser=action.payload
        }

    }

})
export const { } = authSlice.actions;

export default authSlice.reducer;