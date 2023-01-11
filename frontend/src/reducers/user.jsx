import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    error: null,
    name: null,
    id: null,
    accessToken: null,
  },
  reducers: {
    setName: (store, action) => {
      store.name = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setId: (store, action) => {
      store.id = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
  },
});

export default user;