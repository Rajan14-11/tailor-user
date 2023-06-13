import { UIButton } from "@/components/Common/Buttons/UIButton";
import { ProductCard } from "@/components/OrdersPage/OrderCard";
import Topbar from "@/components/HomePage/Topbar";
import LandingPageFooter from "@/components/LandingPage/LandingPageFooter";
import Link from "next/link";
import React from "react";
import { OrderSummary } from "@/components/DetailCart/DetailCart";

export const OrderDetailsCard = () => {
   const adr =  { name:"Rajan",
        address: "place name",
        addressType:"home",
        state: "Punjab",
        city: "Maur",
        Country: "India",
        mobileNumber: 988656548,
        _id:1,
        pinCode:15109
      }
  return (
    <div className="border m-2 flex p-4 flex-col sm:justify-between sm:flex-row">
      <div className="sm:w-2/3 flex justify-between mr-4">
        <div className="w-1/2 flex flex-col gap-1">
          <h3 className="font-bold text-xl font-secondary">Shipping Address</h3>
          <p className="font-primary font-seminbold text-lg">{adr.name}</p>
          <p className="font-primary font-seminbold text-lg">
            {adr.address}-{adr.pinCode}
          </p>
          <p className="font-primary font-seminbold text-lg">{adr.mobileNumber}</p>
        </div>
        <div className="w-1/2 flex flex-col items-end sm:items-start">
          <h3 className="font-bold text-xl sm:flex justify-end font-secondary">Payment Option</h3>
        </div>
      </div>
      <div className="sm:w-1/3 flex flex-col items-center">
        <h3 className="font-bold text-xl text-center font-secondary">Order Summary</h3>
        <OrderSummary orderDetails={true}  />
      </div>
    </div>
  );
};

const orderDetails = () => {
  return (
    <div>
      <Topbar />
      <div className="my-8">
      <OrderDetailsCard />
      <ProductCard />
      <Link href={"/orders"} className="mb-4">
      <UIButton title="Explore more Orders" css="flex justify-center items-center mb-4"/>
      </Link>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default orderDetails;
