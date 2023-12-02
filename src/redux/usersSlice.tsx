import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Users = {
    id:string,
    name:string
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
});

const usersSlice = createSlice({
    name:'users',
    initialState:{
        users: [] as Array<Users>,
        loading: false,
        error: false
    },
    reducers:{
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getUsers.pending,(state) => {
            state.loading = true
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state,action) => {
            state.loading = false;
            state.error = true;
        })
    }
});

// export const getUsers = () => {
//     return async (dispatch:any) => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         dispatch(setUsers(data));
//     }
// }

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;