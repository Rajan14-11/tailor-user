import React from 'react'

interface StepProp {
  onClick?: any;
  stepNumber:string,
  active:boolean,
  title:string,
  body?:any
}

const CheckoutStep = (props:StepProp) => {
  return (
    <div className="border-box bg-white shadow-xl mb-4 sm:mb-8">
      <div
        onClick={props.onClick}
        className={`w-full border-box sm:px-12 p-2 sm:py-6 ${props.active && "bg-primary text-neutral"}`}
      >
        <div>
          <span className="font-secondary inline-block text-center bg-neutral text-primary rounded font-bold sm:p-4 p-2">{props.stepNumber}</span>
          <span className="font-secondary inline-block text-xl font-semibold ml-4 sm:ml-8">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
}

export default CheckoutStep