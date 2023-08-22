import { resetPassword } from "../actionThunks";

export const resetPasswordCases = (builder) => {
  builder.addCase(resetPassword.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(resetPassword.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
  builder.addCase(resetPassword.fulfilled, (state) => {
    state.isLoading = false;
    state.error = null;
    state.user = null;
    state.isSignIn = false;
  });
};
