import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import authReducer from '../slice/authSlice';
import transactionReducer from '../slice/accountSlice';
import { authPersistConfig } from "./authPersistConfig";

const rootReducer = combineReducers({
  // Persist only the auth slice
  auth: persistReducer(authPersistConfig, authReducer),
  transaction: transactionReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
