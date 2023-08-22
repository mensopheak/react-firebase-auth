import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SignInPage from "./components/pages/SignInPage";
import AboutPage from "./components/pages/AboutPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";

function App() {
  return (
    <div className="container p-3 mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/reset-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
