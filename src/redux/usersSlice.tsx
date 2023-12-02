import { createSlice } from '@reduxjs/toolkit';

type Users = {
    id:string,
    name:string
}

const usersSlice = createSlice({
    name:'users',
    initialState:{
        users: [] as Array<Users>,
    },
    reducers:{
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const getUsers = () => {
    return async (dispatch:any) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        dispatch(setUsers(data));
    }
}

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;