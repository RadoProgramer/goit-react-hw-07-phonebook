import { createSlice, createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/add");
export const deleteContact = createAction("contacts/delete");

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addContact, (state, action) => {
        const { name, number } = action.payload;
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        state.push(newContact);
      })
      .addCase(deleteContact, (state, action) => {
        return state.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
