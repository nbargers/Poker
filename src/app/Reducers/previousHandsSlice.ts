import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// interface Cards {
//     code: string,
//     image: string,
//     images: {
//         png: string,
//         svg: string
//     },
//     suit: string,
//     value: string
// }

// interface OldScore {
//     score: {newScore: string}
// }

export interface PreviousHandsState {
  value: any;
}

const initialState: PreviousHandsState = {
  value: [],
};

export const previousHandsSlice = createSlice({
  name: 'hand',
  initialState,
  reducers: {
   updatePreviousHands: (state, action: PayloadAction<[]>) => {
      if(!state.value[0]) state.value = [action.payload]
      else state.value = [action.payload, ...state.value]
    },
    removeExtraHands: (state) => {
      state.value.pop()  
    }
  },

});

export const { updatePreviousHands, removeExtraHands } = previousHandsSlice.actions;

export const selectPreviousHands = (state: RootState) => state.previousHands.value;


export default previousHandsSlice.reducer;
