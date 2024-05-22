import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  food: [],
}

export const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload
    },
  },
})

export const { setFood } = foodSlice.actions

export default foodSlice.reducer