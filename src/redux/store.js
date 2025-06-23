import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from './services/mainApi';
import authReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;