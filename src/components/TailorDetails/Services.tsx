import { useStateContext } from "@/Context/ContextState";
import Link from "next/link";
import React from "react";
import Card from "../HomePage/Card";

const Services = ({ products }: any) => {
  const { search } = useStateContext();

  const Filteredsellers = products?.filter((product: any) =>
    product.name.toLowerCase().includes(search?.toLowerCase())
  );

  const response = search?.length > 0 ? Filteredsellers : products;
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="flex flex-col w-fit text-2xl font-bold items-center font-secondary">
        Services We offer
        <span className="h-[3px] bg-primary w-full rounded-xl"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {response?.map((product: any) => (
          <Link href={`/productPage?productId=${product._id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
