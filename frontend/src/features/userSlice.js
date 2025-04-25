import { createSlice } from '@reduxjs/toolkit';

// Initial state: user information (null if not logged in)
const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to log in a user (store user data)
    login: (state, action) => {
      state.user = action.payload; // Store user data
      state.isAuthenticated = true; // Set authenticated status
    },
    // Action to log out a user (clear user data)
    logout: (state) => {
      state.user = null; // Clear user data
      state.isAuthenticated = false; // Set not authenticated
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;

// Export selector to access user data and authentication status
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;
