import { useCreateUserAddressesMutation } from "@/Redux/api";
import { useAppSelector } from "@/Redux/hooks";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import TextInput from "../Common/Inputs/TextInput";
import { Address } from "./CheckoutMain";

interface AddressFormProps {
  initialData?: Address | any;
  onSubmitForm: Function | any;
  withoutLayout?: boolean;
}

const AddressForm = (props: AddressFormProps) => {
  console.log(props);
  const { initialData } = props;
  const user = useAppSelector((state) => state.user);
  const [id, setId] = useState(initialData ? initialData._id : "");
  const [submitFlag, setSubmitFlag] = useState(false);

  const [createAddress, { data: newadd, error: newadderror }] =
    useCreateUserAddressesMutation();

  const [_address,set_Address] = useState({})
  const onAddressSubmit = (values: any) => {
    const payload = {
      useraddress: {
        name: values.name,
        mobileNumber: values.mobileNumber,
        pinCode: values.pinCode,
        locality: values.locality,
        completeaddress: values.address,
        cityDistrictTown: values.cityDistrictTown,
        state: values.state,
        landmark: values.landmark,
        alternatePhone: values.alternatePhone,
        addressType: values.addressType,
      },
    };
    console.log(payload);
    if (id) {
      payload.useraddress._id = id;
    }
    setSubmitFlag(true);
    createAddress({ payload });

    if (id) {
      set_Address(payload.useraddress)
    }
  };

  // console.log(newadd?.address)

  useEffect(() => {
    if (submitFlag)
      if (typeof newadd !== undefined) {
        if (!id) {
          set_Address(newadd?.address?.address.slice(
            newadd?.address?.address.length - 1
          )[0])
        }
        props.onSubmitForm(_address);
      }
      // console.log(_address)
    }, [typeof newadd]);

    console.log(_address)
  // useEffect(() => {
  //   // console.log("addressCount", user.address);
  //   if (submitFonlag) {
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
            name: initialData?.name || "",
            mobileNumber: initialData?.mobileNumber || "",
            pinCode: initialData?.pinCode || "",
            locality: initialData?.locality || "",
            address: initialData?.address || "",
            cityDistrictTown: initialData?.cityDistrictTown || "",
            state: initialData?.state || "",
            landmark: initialData?.landmark || "",
            alternatePhone: initialData?.alternatePhone || "",
            addressType: initialData?.addressType || "home",
          }}
          onSubmit={(values) => onAddressSubmit(values)}
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
          <span className="inline-block text-center bg-neutral text-primary rounded p-4 cursor-pointer">
            +
          </span>
          <span className="inline-block font-semibold ml-6 cursor-pointer">
            {"ADD NEW ADDRESS"}
          </span>
        </div>
      </div>
      <div className="px-2 sm:px-20 pb-8">{renderAddressForm()}</div>
    </div>
  );
};

export default AddressForm;
