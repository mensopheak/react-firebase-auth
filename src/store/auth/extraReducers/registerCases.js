import { registerUser } from "../actionThunks";

export const registerCases = (builder) => {
  builder.addCase(registerUser.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(registerUser.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });
  builder.addCase(registerUser.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload;
  });
};
