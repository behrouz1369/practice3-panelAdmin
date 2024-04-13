import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menu',
    initialState:{
        isOpenMenu : false
    },
    reducers:{
        toggleMenu: (state,action) => {
            state.isOpenMenu = ! action.payload
        },
    }
})

export const { toggleMenu } = menuSlice.actions

export default menuSlice.reducer
