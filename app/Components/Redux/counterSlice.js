
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      //   console.log("redux store value", action.payload);
      //state we are getting current state action.payload means the current payload of the state
    },
    removeUser(state, action) {
      // const productValue = action.payload.filter()
      const idToRemove = action.payload;
      return state.filter((item) => item.id !== idToRemove);
    },
    updateUser(state, action) {
      const updatedItem = action.payload;
      return state.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem; // Replace the item with the updated one
        }
        return item;
      });
    },
  },
});
export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
