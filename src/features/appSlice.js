/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  userInfo: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, { payload }) => {
      state.roomId = payload.roomId;
    },
    getUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export const { enterRoom, getUserInfo } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;
export const userInfo = (state) => state.app.userInfo;

export default appSlice.reducer;
