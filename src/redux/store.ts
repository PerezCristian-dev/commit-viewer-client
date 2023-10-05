import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { commitsRTKProvider } from "./rtk/commits";
import commitsReducer from "./slices/commits/index";
import middlewares from "./middlewares";

export const store = configureStore({
  reducer: {
    [commitsRTKProvider.reducerPath]: commitsRTKProvider.reducer,
    commits: commitsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middlewares);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
