import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    currentDate: null, // Начальное значение
  },
  reducers: {
    setDate: (state, action) => {
      state.currentDate = action.payload; // Устанавливаем дату
    },
  },
});

export const { setDate } = dateSlice.actions; // action

export default dateSlice.reducer;
