import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";


// ASYNC ACTION
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {

    console.log("Async Function Started");

    // Simulating API Delay
    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );

    console.log("API Response Received");

    return {
      name: "Manish Rai",
      role: "Frontend Developer",
    };
  }
);

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {

    // PENDING
    builder.addCase(fetchUser.pending, (state) => {
      console.log("Pending State");

      state.loading = true;
    });

    // FULFILLED
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("Fulfilled State");

      state.loading = false;

      state.data = action.payload;

      console.log("Stored Data:", action.payload);
    });

    // REJECTED
    builder.addCase(fetchUser.rejected, (state) => {
      console.log("Rejected State");

      state.loading = false;

      state.error = "Something went wrong";
    });
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
export const userDemoReducer = userSlice.reducer;
