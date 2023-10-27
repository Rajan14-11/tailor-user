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
const LeftSection = ({product}:any) => {
  // console.log(product)
  const [image, setImage] = useState(product?.productPictures[0].img);

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
          {
            product?.productPictures.map((pic:any)=>(
          <div className="mr-8 mb-4 flex justify-center">
            <Image
              alt="small-image"
              src={pic.img}
              width={200}
              height={100}
              className="w-full h-full cursor-pointer transition-[0.5s]"
              onClick={() => setImage(pic.img)}
            />
          </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default LeftSection