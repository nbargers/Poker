import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import deckReducer from './Reducers/deckSlice';
import handReducer from './Reducers/handSlice'
import scoreReducer from './Reducers/scoreSlice'
import previousHandsReducer from './Reducers/previousHandsSlice';

export const store = configureStore({
  reducer: {
    deck: deckReducer,
    hand: handReducer,
    score: scoreReducer,
    previousHands: previousHandsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
