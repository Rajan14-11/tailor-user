import Link from 'next/link';
import React from 'react'
import BottomPart from './BottomPart';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

type ProductType = {
    id:number,
    title:string,
    description:string,
    price:number,
    discountPercentage: number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[]
}
const ProductPage = () => {
    const details : ProductType = {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    };

  return (
    <div className="w-full h-fit bg-neutral">
      {!details ? (
        "Loading..."
      ) : (
        <>
          <div className="w-full p-4 md:p-12 mt-0 overflow-x-hidden">
            <div className="flex mr-4 mb-8 ml-4">
              <Link
                className="font-bold mx-4 text-secondary cursor-pointer"
                href="/homepage"
              >
                Home
              </Link>
              <span className="font-bold mx-4 text-secondary cursor-pointer">
                &gt;
              </span>
              <h6 className="font-bold mx-4 text-secondary cursor-pointer">
                Productname
              </h6>
            </div>

            <div className="flex flex-col md:flex-row w-full h-full items-start justify-between" key={details && details.id}>
              <LeftSection product={details && details} />

              <RightSection product={details && details} />
            </div>
            <BottomPart />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage