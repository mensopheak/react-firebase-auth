import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button, InputField, Heading, CustomLink, CustomForm } from "../utils";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../store";
import { toast } from "react-toastify";
import UnAuthWrapper from "./UnAuthWrapper";

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const auth = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(resetPassword(data.emailAddress)).then(
      (response) => {
        if (response.type === resetPassword.fulfilled.toString()) {
          toast.success("Please check your email to reset a new password.");
        }
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong.");
      }
    );
  };

  return (
    <UnAuthWrapper>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Heading>Send Email To Reset Password</Heading>
        <InputField
          title="Email Address"
          required
          errors={errors}
          register={register}
        />
        <Button isLoading={auth.isLoading}>Send</Button>
        <div className="flex justify-between">
          <CustomLink to="/sign-in" replace>
            Go To Sign In
          </CustomLink>
        </div>
      </CustomForm>
    </UnAuthWrapper>
  );
}

export default ForgotPasswordPage;
