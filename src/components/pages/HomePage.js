import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import AuthWrapper from "./AuthWrapper";
import { signOutUser, verifyEmail } from "../../store";
import { Button } from "../utils";

function HomePage() {
  const auth = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutUser());
    toast.success("You were signed out.");
  };

  const handleSendVerifyEmailLink = async () => {
    dispatch(verifyEmail()).then(
      (response) => {
        if (response.type === verifyEmail.fulfilled.toString()) {
          toast.success("Please verify your email.");
        }
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong.");
      }
    );
  };

  const renderedVerifyEmail = () => {
    return (
      <div className="border rounded-md p-3 mt-3 flex items-center gap-5">
        <div>Please verify your email address!</div>
        <Button isLoading={auth.isLoading} onClick={handleSendVerifyEmailLink}>
          Send Verify Email Link
        </Button>
      </div>
    );
  };

  return (
    <AuthWrapper>
      {auth.user && (
        <div>
          <div className="flex justify-between items-center bg-orange-500 p-3 rounded text-white">
            <h1 className="text-lg font-bold">
              {auth.user.email} - (
              {auth.user.emailVerified ? "Verified" : "Not Verified"})
            </h1>

            <ul className="flex items-center gap-5">
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </li>
            </ul>
          </div>
          {!auth.user.emailVerified && renderedVerifyEmail()}
        </div>
      )}
    </AuthWrapper>
  );
}

export default HomePage;
