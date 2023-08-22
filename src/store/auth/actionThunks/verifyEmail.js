import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendEmailVerification } from "firebase/auth";
import { firebaseAuth } from "../../../configs/firebase";

export const verifyEmail = createAsyncThunk("auth/verify-email", async () => {
  const actionCodeSettings = {
    url: "http://localhost:3000/",
    handleCodeInApp: true,
  };

  await sendEmailVerification(firebaseAuth.currentUser, actionCodeSettings);
});
