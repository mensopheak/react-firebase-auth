import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { firebaseAuth } from "../../configs/firebase";
import { useSelector } from "react-redux";

function UnAuthWrapper({ children }) {
  const navigate = useNavigate();

  const auth = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, [navigate]);

  if (!auth.isSignIn) return <>{children}</>;
}

export default UnAuthWrapper;
