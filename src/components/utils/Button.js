import classNames from "classnames";

function Button({ children, onClick, className, isLoading }) {
  const classes = classNames(
    "px-5 py-2 font-semibold rounded border bg-blue-400 hover:bg-blue-500 text-white",
    className
  );

  return (
    <button disabled={isLoading} className={classes} onClick={onClick}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
