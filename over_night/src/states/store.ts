import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
  } from 'redux-persist'

import userReducer from "./user"
import hotelsReducer from "./hotels"

import storage from "redux-persist/lib/storage"
// import { persistReducer} from 'redux-persist';

// export const store = configureStore({
//     reducer: {
//         user: userReducer,
//         hotels: hotelsReducer
//   }
//   })
const persistConfig = {
    key: "root",
    storage
}

const reducers = combineReducers({
    user: userReducer,
    hotels: hotelsReducer,
})


const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: []
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),

})