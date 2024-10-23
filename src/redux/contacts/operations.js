import { goitApi } from "../auth/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async ({ name, number }, thunkApi) => {
    try {
      const { data } = await goitApi.post("/contacts", { name, number });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
