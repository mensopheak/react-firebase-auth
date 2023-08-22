import { signOutUser } from "../actionThunks";

export const signOutCases = (builder) => {
  builder.addCase(signOutUser.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(signOutUser.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
  builder.addCase(signOutUser.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = null;
    state.isSignIn = false;
  });
};
