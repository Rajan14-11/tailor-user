import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import TextInput from "../Common/Inputs/TextInput";
import { Address } from "./CheckoutMain";

interface AddressFormProps{
  initialData?:Address|any,
  onSubmitForm:Function|any,
  withoutLayout?:boolean
}

const AddressForm = (props: AddressFormProps) => {
  console.log(props)
  const { initialData } = props;
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    initialData ? initialData.mobileNumber : ""
  );
  const [pinCode, setPinCode] = useState(
    initialData ? initialData.pinCode : ""
  );
  const [locality, setLocality] = useState(
    initialData ? initialData.locality : ""
  );
  const [address, setAddress] = useState(
    initialData ? initialData.address : ""
  );
  const [cityDistrictTown, setCityDistrictTown] = useState(
    initialData ? initialData.cityDistrictTown : ""
  );
  const [state, setState] = useState(initialData ? initialData.state : "");
  const [landmark, setLandmark] = useState(
    initialData ? initialData.landmark : ""
  );
  const [alternatePhone, setAlternatePhone] = useState(
    initialData ? initialData.alternatePhone : ""
  );
  const [addressType, setAddressType] = useState(
    initialData ? initialData.addressType : ""
  );
  const [id, setId] = useState(initialData ? initialData._id : "");
  const [submitFlag, setSubmitFlag] = useState(false);

  const inputContainer = {
    width: "100%",
    marginRight: 10,
  };

  // const onAddressSubmit = (e: any) => {
  //    const payload = {
  //      address: {
  //        name,
  //        mobileNumber,
  //        pinCode,
  //        locality,
  //        address,
  //        cityDistrictTown,
  //        state,
  //        landmark,
  //        alternatePhone,
  //        addressType,
  //       _id:id
  //      },
  //    };
  //    // console.log(payload);
  //    if (id) {
  //      payload.address._id = id;
  //    }
  //   setSubmitFlag(true);
  //   alert("Form Submitted")
  // };

  // useEffect(() => {
  //   // console.log("addressCount", user.address);
  //   if (submitFlag) {
  //     // console.log("where are we", user);
  //     let _address = {};
  //     if (id) {
  //       _address = {
  //         _id: id,
  //         name,
  //         mobileNumber,
  //         pinCode,
  //         locality,
  //         address,
  //         cityDistrictTown,
  //         state,
  //         landmark,
  //         alternatePhone,
  //         addressType,
  //       };
  //     }
  //     // else {
  //     //   _address = user.address.slice(user.address.length - 1)[0];
  //     // }

  //     props.onSubmitForm(_address);
  //   }
  // }, []);

  const renderAddressForm = () => {
    return (
      <>
        <Formik
          initialValues={{
            name,
            mobileNumber,
            pinCode,
            locality,
            address,
            cityDistrictTown,
            state,
            landmark,
            alternatePhone,
            addressType: "home",
          }}
          onSubmit={props.onSubmitForm}
          className="w-full"
        >
          <Form className="w-full sm:w-3/4 m-auto">
            <div className="flex flex-col sm:flex-row justify-between">
              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4"}
                label="Name"
                name="name"
                //   onChange={(e) => setName(e.target.name)}
              />
              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4 "}
                label="10-digit mobile number"
                name="mobileNumber"
                //   onChange={(e) => setMobileNumber(e.target.name)}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4 "}
                label="Pincode"
                name="pinCode"
                //   onChange={(e) => setPinCode(e.target.name)}
              />

              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4  "}
                label="Locality"
                name="locality"
                //   onChange={(e) => setLocality(e.target.name)}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4  "}
                label="Address"
                name="address"
                //   onChange={(e) => setAddress(e.target.name)}
              />
            </div>

            <div className="flex flex-col sm:flex-row">
              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4 "}
                label="City/District/Town"
                name="cityDistrictTown"
                //   onChange={(e) => setCityDistrictTown(e.target.name)}
              />

              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4  "}
                label="State"
                name="state"
                //   onChange={(e) => setState(e.target.name)}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4 "}
                label="Landmark (Optional)"
                name="landmark"
                //   onChange={(e) => setLandmark(e.target.name)}
              />

              <TextInput
                css={"flex flex-col gap-1 w-full sm:m-4 "}
                label="Alternate Phone (Optional)"
                name="alternatePhone"
                //   onChange={(e) => setAlternatePhone(e.target.name)}
              />
            </div>

            <div className="m-4 font-secondary">
              <label>Address Type</label>
              <div className="flex items-center justify-between w-2/3 sm:m-4">
                <span className="w-2/3">Home</span>
                <TextInput
                  css={"flex flex-col gap-1 w-full sm:m-4 "}
                  type="radio"
                  // onClick={() => setAddressType("home")}
                  name="addressType"
                  value="home"
                />
              </div>
              <div className="flex items-center justify-between font-secondary w-2/3 sm:m-4">
                <span className="w-2/3">Work</span>
                <TextInput
                  css={"flex flex-col gap-1 w-full sm:m-4"}
                  type="radio"
                  // onClick={() => setAddressType("work")}
                  name="addressType"
                  value="work"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <UIButton
                css={"flex justify-center"}
                title="SAVE AND DELIVER HERE"
              />
            </div>
          </Form>
        </Formik>
      </>
    );
  };

  if (props.withoutLayout) {
    return <div className="w-full">{renderAddressForm()}</div>;
  }

  return (
    <div className="bg-white shadow-xl mb-8">
      <div className={`w-full px-4 sm:px-8 py-4`}>
        <div>
          <span className="inline-block text-center bg-neutral text-primary rounded p-4 cursor-pointer">+</span>
          <span className="inline-block font-semibold ml-6 cursor-pointer">{"ADD NEW ADDRESS"}</span>
        </div>
      </div>
      <div className="px-2 sm:px-20 pb-8"
      >
        {renderAddressForm()}
      </div>
    </div>
  );
};

export default AddressForm;
