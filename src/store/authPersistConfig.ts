import storage from "redux-persist/lib/storage";

export const authPersistConfig = {
  key: "root",           // Unique key for this persisted reducer
  storage,               // Using local storage
 // whitelist: ["token", "role", "userInfo"], // Persist only these fields
};
