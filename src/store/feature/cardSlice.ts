import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface iPost {
  userId: number;
  id: number;
  title: string;
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
      const { id } = action.payload;
      const existingId = state.post.find((i) => i.id === id);
      if (existingId) {
        return;
      } else {
        state.post.push(action.payload);
      }
    },
    removeCard: (state, action) => {
      state.post = state.post.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
