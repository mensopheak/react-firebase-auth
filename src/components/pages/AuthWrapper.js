import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { firebaseAuth } from "../../configs/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getLocalPersistenceAuth } from "../../store/auth/authSlice";

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(getLocalPersistenceAuth(user));
      } else {
        navigate("/sign-in");
      }
    });
  }, [dispatch, navigate]);

  if (auth.isSignIn) return <>{children}</>;
}

export default AuthWrapper;
