import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from './services/mainApi';

const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;