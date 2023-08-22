function CustomForm({ onSubmit, children }) {
  return (
    <form
      className="border rounded p-5 w-[500px] flex flex-col mx-auto"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default CustomForm;
