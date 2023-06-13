import Image from 'next/image';
import React,{useState} from 'react'


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface Props {
    product:Product
}
const LeftSection = ({product}:Props) => {
  const [image, setImage] = useState(product.images && product.thumbnail);

  return (
    <>
      <div className="w-full md:w-1/2 md:mb-20 flex justify-center items-center flex-col">
        <div className="w-[90%] h-96 flex justify-center mt-12">
          <Image
            src={image}
            alt="big-image"
            className="w-full h-full cursor-all-scroll"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex md:my-16 mt-12 w-[90%] flex-wrap md:flex-nowrap">
          <div className="mr-8 mb-4 flex justify-center">
            <Image
              alt="small-image"
              className="w-full h-full cursor-pointer transition-[0.5s]"
              width={200}
              height={100}
              src={product.images && product.images[0]}
              onClick={() => setImage(product.images && product.images[0])}
            />
          </div>
          <div className="mr-8 mb-4 flex justify-center">
            <Image
              alt="small-image"
              src={product.images && product.images[1]}
              width={200}
              height={100}
              className="w-full h-full cursor-pointer transition-[0.5s]"
              onClick={() => setImage(product && product.images[1])}
            />
          </div>
          <div className="flex mb-4 justify-center">
            <Image
              alt="small-image"
              src={product.images && product.images[2]}
              width={200}
              height={100}
              className="w-full h-full cursor-pointer transition-[0.5s]"
              onClick={() => setImage(product.images && product.images[2])}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection