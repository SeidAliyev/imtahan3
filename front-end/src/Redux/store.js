import { configureStore } from '@reduxjs/toolkit'
import foodSlicer from './Features/foodSlicer'

export const store = configureStore({
  reducer: {
    foods:foodSlicer
  },
})