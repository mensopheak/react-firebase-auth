import { signInUser } from "../actionThunks";

export const signInCases = (builder) => {
  builder.addCase(signInUser.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(signInUser.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
  builder.addCase(signInUser.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload;
    state.isSignIn = true;
  });
};
