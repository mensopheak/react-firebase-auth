import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { firebaseAuth } from "../../../configs/firebase";
import { signOut } from "firebase/auth";

export const signOutUser = createAsyncThunk("auth/sign-out", async () => {
  await setPersistence(firebaseAuth, browserLocalPersistence);
  await signOut(firebaseAuth);
});
