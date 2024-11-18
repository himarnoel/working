import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../services/authApi';
import { jobsApi } from '../services/jobApi';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [jobsApi.reducerPath]:jobsApi.reducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, jobsApi.middleware),
});


export default store;