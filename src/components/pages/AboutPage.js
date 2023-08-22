import { Link } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

function AboutPage() {
  return (
    <AuthWrapper>
      <div>
        <Link to="/">Back To Home</Link>
      </div>
    </AuthWrapper>
  );
}

export default AboutPage;
