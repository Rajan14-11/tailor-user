import TextInput from "@/components/Common/Inputs/TextInput";
import Header from "@/components/Header/Header";
import { loginSchema } from "@/schemas";
import { Form, Formik, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Images from "@/assets/Images";

function Login() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>

      <Header />
      <div className="w-full h-[90vh] bg-login-gradient flex flex-col items-center justify-center">
        {/* <div className="w-full h-full backdrop-brightness-50 p-4"> */}
        <div className="flex items-center justify-center w-full h-full">
          <div className=" flex justify-center items-center w-full md:justify-evenly md:flex-row-reverse h-full">
            <div className="w-[75vw] sm:w-96 bg-login-form text-slate-100 rounded p-4 md:w-1/2 lg:w-1/3 h-fit py-8">
              <h1 className="mb-4">Login to access your account..</h1>
              <h3 className="mb-2">{true ? "Login" : "Register"}</h3>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                  checkbox: false,
                }}
                onSubmit={() => {
                  setMessage("Form submitted");
                  setSubmitted(true);
                }}
                validationSchema={loginSchema}
              >
                <Form>
                  <TextInput
                    css={"flex flex-col gap-1"}
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="username"
                  />

                  <TextInput
                    css={"flex flex-col gap-1"}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                  <button
                    className="w-full mt-8 mb-2 py-3 bg-slate-100 text-black rounded-full font-bold hover:bg-primary hover:text-stone-900 "
                    type="submit"
                  >
                    Login
                  </button>

                  <Link
                    href="/forget_password"
                    className="underline block cursor-pointer text-sm"
                  >
                    Forgot Password ?
                  </Link>
                  <h3 className="mb-2 text-base">
                    Not Registered Yet?{" "}
                    <Link href={"/signup"} className="underline ">
                      Register Now
                    </Link>{" "}
                  </h3>
                </Form>
              </Formik>
            </div>

            <div className="hidden md:flex justify-center w-1/3 h-3/4 mr-4">
              <Image
                className="w-full h-full mr-4 rounded"
                src={Images.service1}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Login;
