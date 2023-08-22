import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../store";
import { Button, InputField, Heading, CustomLink, CustomForm } from "../utils";
import UnAuthWrapper from "./UnAuthWrapper";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data)).then(
      (response) => {
        if (response.type === registerUser.fulfilled.toString()) {
          toast.success("You have registered a new account.");
          navigate("/sign-in");
        } else {
          toast.error(response.payload.message);
        }
      },
      (error) => {
        toast.error(error);
      }
    );
  };

  return (
    <UnAuthWrapper>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Heading>Register New Account</Heading>
        <InputField
          title="Email Address"
          register={register}
          required
          errors={errors}
          autoFocus={true}
        />
        <InputField
          title="Password"
          register={register}
          type="password"
          required
          errors={errors}
          autoComplete="off"
          validateOptions={{
            minLength: { value: 6, message: "must be at least 6 characters!" },
          }}
        />
        <InputField
          title="Confirm Password"
          register={register}
          type="password"
          required
          errors={errors}
          autoComplete="off"
          validateOptions={{
            minLength: { value: 6, message: "must be at least 6 characters!" },
            validate: (value) => {
              if (watch("password") !== value) {
                return "does not match!";
              }
            },
          }}
        />
        <Button isLoading={auth.isLoading}>Register</Button>
        <CustomLink to="/signin" replace>
          Go To Sign In
        </CustomLink>
      </CustomForm>
    </UnAuthWrapper>
  );
}

export default RegisterPage;
