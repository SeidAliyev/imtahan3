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
    removeFood: (state, action) => {
      state.food = state.food.filter(elem=>elem._id!==action.payload._id)
    },
    postFood: (state, action) => {
      state.food = [...state.food,action.payload]
    },
    searchFood: (state, action) => {
      state.food = state.food.filter(elem=>elem.title.includes(action.payload))
    },
    AZFood: (state) => {
      state.food = state.food.sort((a,b)=>a.title.localeCompare(b.title))
    },
  },
})

export const { setFood,searchFood,AZFood,removeFood,postFood } = foodSlice.actions

export default foodSlice.reducer