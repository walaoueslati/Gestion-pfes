import { configureStore } from '@reduxjs/toolkit';
import disponibiliteReducer from '../features/disponibiliteSlice';
import affectationReducer from '../features/affectationSlice';
import userReducer from '../features/userSlice'; // Import user slice

export default configureStore({
  reducer: {
    disponibilite: disponibiliteReducer,
    affectation: affectationReducer,
    user: userReducer, // Add user slice to the store
  },
});
