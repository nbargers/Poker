import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DeckState {
  value: string;
}

const initialState: DeckState = {
  value: '',
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
   updateDeckId: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },

});

export const { updateDeckId } = deckSlice.actions;

export const selectDeck = (state: RootState) => state.deck.value;


export default deckSlice.reducer;
