import { createSlice } from '@reduxjs/toolkit';

const affectationSlice = createSlice({
  name: 'affectation',

  initialState: {
    resultats: [],
  },
  
  reducers: {
    setAffectations: (state, action) => {
      state.resultats = action.payload;
    },
    addOrUpdateAffectation: (state, action) => {
      const index = state.resultats.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.resultats[index] = action.payload;
      } else {
        state.resultats.push(action.payload);
      }
    },
    removeAffectation: (state, action) => {
      state.resultats = state.resultats.filter(a => a.id !== action.payload);
    },
    clearAffectations: (state) => {
      state.resultats = [];
    }
  },
  
});

export const { setAffectations , clearAffectations } = affectationSlice.actions;
export default affectationSlice.reducer;
