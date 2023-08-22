import { Link } from "react-router-dom";

function CustomLink({ to, replace = false, children }) {
  return (
    <Link
      to={to}
      replace={replace}
      className="text-blue-400 underline text-center mt-3 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}

export default CustomLink;
