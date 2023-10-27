import { useStateContext } from "@/Context/ContextState";
import Link from "next/link";
import React from "react";
import Card from "./Card";
const Cards = (props: {sellers: any}) => {
  const { search } = useStateContext();
  // console.log(props.sellers);
  const Filteredsellers = props.sellers?.filter((seller:any) =>
    seller.storeName.toLowerCase().includes(search?.toLowerCase())
  );
  // console.log(Filteredsellers);
  const response = search?.length > 0 ? Filteredsellers : props.sellers;
  // console.log(response);
  return (
    <>
      {response?.length > 0 ? (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[85%] lg:grid-cols-4 m-auto gap-4 md:gap-8 h-fit bg-white p-4 justify-center">
          {props.sellers?.map((seller: any) => (
            <Link href={`/tailordetails?seller=${seller.seller}`}>
              <Card seller={seller}/>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="text-xl font-secondary text-center bg-white py-20">
          No Tailors found for your pincode. Kindly search for another pincode.
        </h1>
      )}
    </>
  );
};

export default Cards;
