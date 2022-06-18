import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    user: {
        firstVisit: Boolean
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstVisit: true,
    },
    reducers: {
        visited: (state) => {
            state.firstVisit = false
        },
    },
})

export const selectFirstVisit = (state: UserState) => state.user.firstVisit

export const { visited } = userSlice.actions

export default userSlice.reducer
