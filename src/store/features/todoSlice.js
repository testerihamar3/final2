import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    loading: false,
    users: []
}

export const getUsersAsync = createAsyncThunk("todo/getUsersAsync", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    if (response.ok) {
        const data = await response.json()
        return data
    }
    throw new Error("Error !!!")
})

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        incrementRedux(state, action) {
            state.count += action.payload
        },
        decrementRedux(state, action) {
            state.count -= action.payload
        },
        // addUserRedux(state, action) {
        //     state.users.push(action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getUsersAsync.rejected, (state, action) => {
                state.loading = false
                alert(action.error.message)
            })
    }
})

const a = []

export const { incrementRedux, decrementRedux } = todoSlice.actions
export default todoSlice.reducer
