import TextInput from "@/components/Common/Inputs/TextInput";
import Header from "@/components/Header/Header";
import { loginSchema } from "@/schemas";
import { Form, Formik, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Images from "@/assets/Images";
import {
  useAddToCartMutation,
  useGetCartMutation,
  useLoginMutation,
} from "@/Redux/api";
import Cookies from "js-cookie";
import { isUserAuthenticated, loginSlice } from "@/Redux/userSlice";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { getCartItems, updateCart } from "@/Redux/cartSlice";

function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { data, isLoading, isError, isSuccess, error }] =
    useLoginMutation();
  if (isSuccess) {
    Cookies.set("token", data?.token);
    Cookies.set("isUserAuthenticated", "true");
    Cookies.set("user", JSON.stringify(data?.user));
    toast.success("Login Successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });

    if(typeof window !=="undefined"){
      const lastRoute = window.localStorage.getItem('lastRoute')
      if(lastRoute){
        router.push(lastRoute);
      }
      else{
        router.push('/homepage')
      }
      window.localStorage.removeItem('lastRoute');
    }

    // router.back();
  }

  useEffect(() => {
    dispatch(loginSlice(data));
  }, [isSuccess]);

  if (isError) {
    let errMsg;
    if (error && "status" in error) {
      errMsg = "error" in error ? error.error : JSON.stringify(error.data);
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
                  email: "",
                  password: "",
                  checkbox: false,
                }}
                onSubmit={(values, action) => {
                  login({
                    email: values.email,
                    password: values.password,
                  });
                }}
                validationSchema={loginSchema}
              >
                <Form>
                  <TextInput
                    css={"flex flex-col gap-1"}
                    label="Username"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />

                  <TextInput
                    css={"flex flex-col gap-1"}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
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
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
