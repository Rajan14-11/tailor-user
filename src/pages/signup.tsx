import Images from '@/assets/Images';
import TextInput, { MyCheckbox } from '@/components/Common/Inputs/TextInput';
import Header from '@/components/Header/Header';
import { loginSchema, signUpSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useMutation } from "react-query";

function signup() {
  // const {mutate} = useMutation()
  return (
    <>
      <Header />

      <div className="w-full h-fit sm:h-fit bg-login-gradient flex sm:items-center justify-center">
        {/* <div className="w-full h-full backdrop-brightness-50 p-4"> */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="p-4 flex justify-center sm:items-center w-full md:justify-evenly md:flex-row-reverse h-full">
            <div className="w-[75vw] bg-login-form text-slate-100 rounded p-4 sm:w-3/4 lg:w-1/2 h-fit py-8">
              <h1 className="mb-4 text-center text-2xl">Register with Us ...</h1>
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  username: "",
                  password: "",
                  confirm_password: "",
                  terms_and_policy: false,
                }}
                onSubmit={(values, actions) => {

                  // action.resetForm()
                }}
                validationSchema={signUpSchema}
              >
                <Form className="flex flex-col gap-6">
                  <div className="flex sm:flex-row flex-col items-center gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <TextInput
                        css={"flex flex-col gap-1"}
                        label="First Name"
                        name="first_name"
                        type="text"
                        placeholder="firstName"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <TextInput
                        css={"flex flex-col gap-1"}
                        label="Last Name"
                        name="last_name"
                        type="text"
                        placeholder="lastName"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col items-center gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <TextInput
                        css={"flex flex-col gap-1"}
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="email"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <TextInput
                        css={"flex flex-col gap-1"}
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="username"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col items-center gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <TextInput
                        css={"flex flex-col gap-1"}
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="password"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <TextInput
                        css={"flex flex-col gap-1"}
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        placeholder="confirm password"
                      />
                    </div>
                  </div>
                  <div>
                    <MyCheckbox name="checkbox" size="w-6 h-6 cursor-pointer">
                      By clicking Create Account, you agree to our Terms and
                      have read and acknowledge our Policy Statement
                    </MyCheckbox>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-full py-3 bg-slate-100 text-black rounded-full font-bold hover:bg-primary hover:text-stone-900"
                      // disabled={isLoading}
                    >
                      Create Account
                    </button>
                    {/* <ToastContainer /> */}
                  </div>
                  <h3 className="mb-2 text-base">Already a Member ? <Link href={'/login'} className='underline '>Login Now</Link> </h3>
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

export default signup