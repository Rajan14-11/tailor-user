import { useVerifyEmailMutation } from "@/Redux/api";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import TextInput from "../Common/Inputs/TextInput";

const Verifyotp = () => {
  const email = Cookies.get("UserEmail");
  const router = useRouter();
  const initialValues = {
    email,
    otp: "",
  };

  const [verifyEmail, { data, isSuccess, isError, error, isLoading }] =
    useVerifyEmailMutation();
  if (isSuccess) {
    toast.success(data.data, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
    router.push(`/login`);
  }

  if (isError) {
    let errMsg;
    if (error && "status" in error) {
      errMsg = "error" in error ? error.error : JSON.stringify(error?.data);
    } else {
      errMsg = error?.message;
    }
    toast.error(errMsg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  }
  return (
    <>
      <div className="w-full h-[93vh] flex justify-center items-center flex-col text-black p-8 bg-slate-100">
        <div className="flex items-center justify-center pb-2">
          <span>
            <p className="justify-start text-2xl font-bold">
              Please Verify your Email
            </p>
          </span>
        </div>

        <Formik
          initialValues={initialValues}
          // validationSchema={ValidationSchema}
          onSubmit={(values) => {
            verifyEmail({ email: values.email, otp: values.otp });
          }}
        >
          {(formik) => (
            <>
              <Form>
                <div className="flex justify-center items-center w-full sm:w-[40vw] h-fit bg-secondary text-white my-4 border-2 border-primary py-8">
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <TextInput
                      css={"flex flex-col gap-1 w-full px-4 text-xl mb-4"}
                      label="Enter your Email"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                    <TextInput
                      css={"flex flex-col gap-1 w-full px-4 text-xl"}
                      label="Enter OTP"
                      name="otp"
                      type="text"
                      placeholder="OTP"
                    />
                  </div>
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="px-2 py-2 text-white bg-secondary text-xl font-neutral rounded-md hover:bg-primary hover:text-white"
                >
                  {"Verify"}
                </button>

                <ToastContainer />
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Verifyotp;
