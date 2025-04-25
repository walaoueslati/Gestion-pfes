import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  disponibilites: {},
};

const disponibiliteSlice = createSlice({
  name: 'disponibilite',
  initialState,
  reducers: {
    toggleSeance: (state, action) => {
      const { dateStr, heure } = action.payload;
      const currentSeances = state.disponibilites[dateStr] || [];
      const index = currentSeances.indexOf(heure);
      if (index === -1) {
        // Add the hour
        currentSeances.push(heure);
      } else {
        // Remove the hour
        currentSeances.splice(index, 1);
      }
      state.disponibilites[dateStr] = currentSeances;
    },

    resetDisponibilites: (state) => {
      state.disponibilites = {};
    },
  },
});

// ✅ Make sure both are exported
export const { toggleSeance, resetDisponibilites } = disponibiliteSlice.actions;
export default disponibiliteSlice.reducer;
