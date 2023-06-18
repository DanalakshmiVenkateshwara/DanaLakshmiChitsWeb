import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const initialState = {
//   numOfCakes: 20,
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: '',
    mobile:0,
    email:''
  },
  reducers: {
    updateUser: (state,action) => {
      return action.payload;
    },
  },
});

//persisit
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // Add the slice names you want to persist
};

// Combine the reducers of all slices into a single rootReducer
const rootReducer = combineReducers({
  cake: userSlice.reducer,
  // iceCream: iceCreamSlice.reducer,
});

// Create the persisted reducer using the combined rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor and export the store and persistor
const persistor = persistStore(store);
export { store, persistor };
