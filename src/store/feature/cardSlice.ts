import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface iPost {
  userId: number;
  id: number;
  titile: string;
  body: string;
}
interface PostState {
  post: iPost[];
}
const initialState: PostState = {
  post: [],
};
const cardSlice = createSlice({
  name: "cardSlice",
  initialState: initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<iPost>) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },
    removeCard: (state, action) => {
      state.post.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
