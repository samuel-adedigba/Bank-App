// import {configureStore} from '@reduxjs/toolkit'
// import authReducer from '../slice/authSlice' //import authentication slice
// import transactionReducer from '../slice/accountSlice'
// import { persistStore, persistReducer, FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig ={
//     key: "root",
//     storage //browser's local storage
// }
// const rootReducer = combineReducers({ //Combines different reducers into a single root reducer. 
//     auth: authReducer,
//     transaction: transactionReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer); // store's state to be saved in localStorage and rehydrated on app load.

//  const store = configureStore( { 
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: ['auth/login/fulfilled',  
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,], // Ignore this specific action
//                 ignoredPaths: ['payload.headers'], // Ignore the headers property
//             },
//         }),
// });

// export const persistor =persistStore(store)  //state persistence in conjunction with the store.
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export default store

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions for serializability checks
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export default store;
