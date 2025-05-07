import { configureStore } from '@reduxjs/toolkit';
import disponibiliteReducer from '../features/disponibiliteSlice';
import affectationReducer from '../features/affectationSlice';
import userReducer from '../features/auth/userSlice'; 

export default configureStore({
  reducer: {
    disponibilite: disponibiliteReducer,
    affectation: affectationReducer,
    user: userReducer, 
  },
});
