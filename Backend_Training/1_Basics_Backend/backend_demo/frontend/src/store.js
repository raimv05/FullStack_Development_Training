import { configureStore } from "@reduxjs/toolkit";
import counterReducer, {
  increment,
  decrement,
  reset,
} from "./components/11_Redux/2_counterSlice";

import usersReducer, {
  fetchUsers,
  deleteUser,
  updateUser,
} from "./components/11_Redux/3_Async_Thunks_Slice";
import { fetchUser, userDemoReducer } from "./components/11_Redux/5_redux_diff_async_store";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    user: userDemoReducer,
  },
});

export { increment, decrement, reset, fetchUsers, deleteUser, updateUser, fetchUser };

export default store;
