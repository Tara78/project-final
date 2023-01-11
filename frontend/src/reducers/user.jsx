import { createSlice } from "@reduxjs/toolkit";
// passing intisal states. By creating slice or reducer, Modofeing our store appear

const user = createSlice({
  name: "user",
  initialState: {
    error: null,
    name: null,
    email: null,
    id: null,
    accessToken: null,
  },
  // Steting Items & Error in reducers
  reducers: {
    setName: (store, action) => {
      store.name = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
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