import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/userSlice';
import repoReducer from './respositories/repoSlice';
import collapseReducer from './respositories/collapseSlide';

export const store = configureStore({
    reducer: {
        users: userReducer,
        repositories: repoReducer,
        collapse: collapseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch