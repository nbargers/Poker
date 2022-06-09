import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


export interface ScoreState {
  value: string;
}

const initialState: ScoreState = {
  value: '',
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
   updateScore: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },

});

export const { updateScore } = scoreSlice.actions;

export const selectScore = (state: RootState) => state.score.value;


export default scoreSlice.reducer;
