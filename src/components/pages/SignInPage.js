import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { signInUser } from "../../store";
import { Button, InputField, Heading, CustomLink, CustomForm } from "../utils";
import UnAuthWrapper from "./UnAuthWrapper";

function SignInPage() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const auth = useSelector((state) => {
    return state.auth;
  });

  const onSubmit = (data) => {
    dispatch(
      signInUser({ email: data.emailAddress, password: data.password })
    ).then(
      (response) => {
        if (response.type === signInUser.fulfilled.toString()) {
          toast.success("You were signed in.");
        } else {
          toast.error(response.payload.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <UnAuthWrapper>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Heading>Sign In To Your Account</Heading>
        <InputField
          title="Email Address"
          required
          errors={errors}
          register={register}
        />
        <InputField
          title="Password"
          type="password"
          required
          autoComplete="off"
          register={register}
          errors={errors}
          validateOptions={{
            minLength: { value: 6, message: "must be at least 6 characters!" },
          }}
        />
        <Button isLoading={auth.isLoading}>Sign In</Button>
        <div className="flex justify-between">
          <CustomLink to="/reset-password" replace>
            Forgot Password?
          </CustomLink>
          <CustomLink to="/register" replace>
            Create New Account?
          </CustomLink>
        </div>
      </CustomForm>
    </UnAuthWrapper>
  );
}

export default SignInPage;
