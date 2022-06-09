import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Cards {
    code: string,
    image: string,
    images: {
        png: string,
        svg: string
    },
    suit: string,
    value: string
}

export interface HandState {
  value: Cards[];
}

const initialState: HandState = {
  value: [],
};

export const handSlice = createSlice({
  name: 'hand',
  initialState,
  reducers: {
   updateHand: (state, action: PayloadAction<Cards[]>) => {
      state.value = action.payload;
    },
  },

});

export const { updateHand } = handSlice.actions;

export const selectHand = (state: RootState) => state.hand.value;


export default handSlice.reducer;
