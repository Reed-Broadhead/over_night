import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./user"
import hotelsReducer from "./hotels"

export const store = configureStore({
    reducer: {
        user: userReducer,
        hotels: hotelsReducer
  }
  })