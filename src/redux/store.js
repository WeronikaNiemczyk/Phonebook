import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer,
  },
});
