import classNames from "classnames";
import v from "voca";

function InputField({
  register,
  title,
  type = "text",
  required,
  validateOptions,
  errors,
  ...rest
}) {
  const cid = v.camelCase(title);
  const labelClass = classNames({ "text-red-400": errors?.[cid] });
  const inputClass = classNames("border rounded px-3 py-2 bg-gray-50", {
    "border-red-400": errors?.[cid],
  });

  let errorMessage;
  if (errors?.[cid]) {
    if (errors?.[cid]?.type === "required") {
      errorMessage = `${title} is required!`;
    } else {
      errorMessage = `${title} ${errors?.[cid].message}`;
    }
  }

  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className={labelClass} htmlFor={cid}>
        {title}
      </label>
      <input
        type={type}
        id={cid}
        name={cid}
        placeholder={title}
        className={inputClass}
        {...register(cid, { required, ...validateOptions })}
        {...rest}
      />
      {errorMessage && (
        <p className="text-red-400 text-sm text-end">{errorMessage}</p>
      )}
    </div>
  );
}

export default InputField;
