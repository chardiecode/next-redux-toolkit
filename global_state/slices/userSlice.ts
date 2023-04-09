"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=5"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  entities: [],
  isLoading: false,
  isRejected: false,
  count: 10,
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
      state.isLoading = false;
      state.isRejected = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.isRejected = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.isRejected = true;
    });
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
