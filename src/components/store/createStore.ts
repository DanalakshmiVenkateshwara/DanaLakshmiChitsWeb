import { useMemo } from "react";
import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const useCreateStore = (storeArr: any) => {
  const extendedStore = [...storeArr]
  const persistKeys = useMemo(() => {
    return extendedStore.reduce((accumulator: any, storeItem: any) => {
      if (storeItem.features && storeItem.features.persist) {
        const key = Object.keys(storeItem.state)[0];
        accumulator.push(key);
      }
      return accumulator;
    }, []);
  }, [extendedStore]);

  const persistConfig = useMemo(() => {
    return {
      key: "root",
      storage,
      whitelist: persistKeys,
    };
  }, [persistKeys]);

  const createSlices = (extendedStore: any) => {
    const actionTypes: any = {}; // Object to store action types
    const reducers = extendedStore.reduce((slices: any, storeItem: any) => {
      const { action } = storeItem;
      const sliceName = Object.keys(storeItem.state)[0];
      const actionName = action.replace(`${sliceName}/`, ""); // Remove the slice name prefix from the action

      const slice = createSlice({
        name: sliceName,
        initialState: storeItem.state[sliceName] === undefined ? null : storeItem.state[sliceName],
        reducers: {
          [actionName]: (state: any, action: { payload: any; }) => action.payload,
          reset: () => storeItem.state[sliceName],
          toggle:(state: any, action: { payload: any; })=> !action.payload,
          append:(state: any, action: { payload: any; })=>({...state,...action?.payload})
        },
      });

      // Store the action type in the actionTypes object
      actionTypes[actionName] = slice.actions[actionName].type;

      return { ...slices, [slice.name]: slice.reducer };
    }, {});

    return { reducers, actionTypes };
  };

  const { reducers,actionTypes } = createSlices(extendedStore);

  const rootReducer = useMemo(() => {
    return persistReducer(persistConfig, combineReducers(reducers));
  }, [persistConfig, reducers]);

  const store = useMemo(() => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware: (arg0: { serializableCheck: { ignoredActions: any[]; }; }) => any) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
  }, [rootReducer]);

  const persistor = useMemo(() => {
    return persistStore(store);
  }, [store]);

  return { store, persistor,actionTypes };
};

export default useCreateStore;
