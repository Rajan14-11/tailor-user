import React from "react";
import TextInput from "../Common/Inputs/TextInput";
import { AiOutlineClose } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { useStateContext } from "@/Context/ContextState";
import { useEffect } from "react";
import { useRef } from "react";
import { fromLatLng, setKey } from "react-geocode";
import { useGetSellersByPincodeQuery, useLazyGetSellersByPincodeQuery } from "@/Redux/api";

function SelectLocation() {
  const { setSelectLocation, getLocation } = useStateContext();
  const inputRef = useRef();
  // console.log(inputRef.current);
  useEffect(() => {
   const sellerdata=  getLocation(inputRef);
   console.log(sellerdata)
    // setSelectLocation(false)
  }, []);
  let pincode;
  const handleLoc = () => {
    let long, lat;
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        // console.log(long,lat)
        setKey("AIzaSyAkM7G7R9ISd_KiFvkI57HJMwO2JIicUJk");

        fromLatLng(lat, long)
          .then(({ results }) => {
            const { formatted_address, address_components } = results[0];
            window.localStorage.setItem(
              "address",
              JSON.stringify({ formatted_address, address_components })
            );
            pincode = address_components?.filter(
              (add: any) => add.types[0] == "postal_code"
            )[0].long_name;

            setSelectLocation(false);
            console.log(pincode);
          })
          .catch(console.error);
      });
    }
  };

    const [getSellers,{ data, error }] = useLazyGetSellersByPincodeQuery();
   useEffect(()=>{
    if(typeof window!=="undefined"){
      pincode = JSON.parse(
        window?.localStorage.getItem("address")
      )?.address_components?.filter(
        (add: any) => add.types[0] == "postal_code"
      )[0]?.long_name;
      getSellers(pincode)
    }
   },[])


  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[2] backdrop-brightness-50">
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-neutral h-screen fixed top-0 left-0 z-[3]">
        <div className="flex justify-end h-12 mr-4 mt-4 text-2xl">
          <AiOutlineClose
            className="cursor-pointer hover:text-neutralFocus"
            onClick={() => setSelectLocation(false)}
          />
        </div>
        <div className="w-full h-[70%] flex flex-col justify-center items-center p-12">
          <div className="w-3/4 text-center h-fit m-4">
            <input
              type="text"
              name="location"
              className="shadow-xl w-full p-4 rounded outline-primary"
              placeholder="Enter Location"
              ref={inputRef}
            />
          </div>
          <div
            className="m-4 flex h-fit bg-white p-4 w-3/4 text-center justify-center items-center cursor-pointer shadow-xl"
            onClick={handleLoc}
          >
            <BiCurrentLocation className="text-xl mr-4" />
            <p className="flex flex-col hover:text-primary">
              Get Current Location{" "}
              <span className="text-sm text-neutralFocus font-primary font-semibold">
                Using GPS
              </span>
            </p>
          </div>
          <div className="m-4 flex flex-col h-fit bg-white p-4 w-3/4 text-center justify-center items-center cursor-pointer shadow-xl">
            <span className="text-neutralFocus font-bold">Recent Searches</span>
            <div className="flex flex-col justify-center items-center font-primary">
              <p className="font-bold hover:text-primary">Dashmesh Nagar</p>
              <p>Maur Mandi </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectLocation;
