import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';

const CartItem = (props:any) => {
    const [qty, setQty] = useState(props.cartItem.qty);
    const { _id, name, price, img } = props.cartItem;

    const onQuantityIncrement = () => {
      setQty(qty + 1);
      props.onQuantityInc(_id, qty + 1);
    };

    const onQuantityDecrement = () => {
      if (qty <= 1) return;
      setQty(qty - 1);
      props.onQuantityDec(_id, qty - 1);
    };

  return (
    <>
      <div
        className="grid items-center my-6 border-b-[1px] border-b-black border-spacing-[10px]"
        key={_id}
      >
        <div className="mb-8 flex w-full h-40 items-center justify-center py-4 gap-4 ">
          <Link href={`/productdetail/${_id}`}>
            <Image
              src={
                img
              }
              alt=""
              className="w-full h-40 rounded "
              width={500}
              height={500}
            />
          </Link>
          <div className="mx-8 w-1/2 flex flex-col justify-center">
            <h4 className="font-bold ">{name}</h4>
            <h6 className="font-primary text-xl font-semibold">{"summary"}</h6>

            {qty > 0 ? (
              <div className="flex w-full items-center">
                <AiOutlineMinusCircle
                  className="cursor-pointer hover:text-primary text-xl"
                  onClick={
                    qty > 1
                      ? () => onQuantityDecrement
                      : () => props.onRemoveCartItem(_id)
                  }
                />

                <p className="mx-4 text-xl py-4 px-2 ">{qty}</p>
                <AiOutlinePlusCircle
                  className="cursor-pointer hover:text-primary text-xl"
                  onClick={() => onQuantityIncrement}
                />
              </div>
            ) : (
              <div>
                <h4 style={{ color: "primary" }}>Out of Stock</h4>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-between w-1/6 h-full">
            <ImBin
              className="cursor-pointer hover:text-primary text-xl"
              onClick={() => props.onRemoveCartItem(_id)}
            />

            {qty > 0 ? (
              <h5 className="text-xl">
                <span className="font-semibold text-black mr-1">₹</span>

                {price * qty}
              </h5>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem