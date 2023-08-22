import { verifyEmail } from "../actionThunks";

export const resetPasswordCases = (builder) => {
  builder.addCase(verifyEmail.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(verifyEmail.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
  builder.addCase(verifyEmail.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload;
    state.isSignIn = true;
  });
};
