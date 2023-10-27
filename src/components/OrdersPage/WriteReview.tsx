import { useAddReviewMutation } from '@/Redux/api'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const WriteReview = ({prodId,setWriteReview}:any) => {
    const [comment,setComment] = useState('')
    const [rating,setRating] = useState('')
    const [email,setEmail] = useState('')
    const [addReview,{data,error}] =useAddReviewMutation()
    const handleWriteReview =(e:any)=>{
        e.preventDefault()
         addReview({
            comment,
            rating,
            productId:prodId
         })
         setWriteReview(false)
    }
  return (
    <div className="absolute top-16 bottom-0 left-0 right-0 backdrop-brightness-50 flex justify-center items-center">
      <div className="py-8 px-4 bg-neutral my-4 rounded w-fit mx-auto relative">
        <div className="title-wrapper text-left">
          <h3 className="font-semibold font-secondary text-2xl mb-4 title-simple text-left text-normal">
            Add a Review
          </h3>

          <p style={{ fontSize: 18 }} className="font-primary">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <AiOutlineClose
          onClick={() => setWriteReview(false)}
          className="absolute top-5 text-2xl cursor-pointer hover:text-primary font-neutral right-5"
        />
        <div className="flex items-center flex-wrap mb-8 font-primary">
          <label htmlFor="rating" className="text-black mr-4">
            Your rating *{" "}
          </label>
          <span className="flex relative text-xl mx-4 selected">
            <a className="text-slate-600 w-[16px] z-10">1</a>
            <a className="text-slate-600 w-[16px]">2</a>
            <a className="text-slate-600 w-[16px]">3</a>
            <a className="text-slate-600 w-[16px]">4</a>
            <a className="text-slate-600 w-[16px]">5</a>
          </span>
          <select
            name="rating"
            id="rating"
            onChange={(e: any) => setRating(e.target.value)}
            // style={{ display: "none" }}
          >
            <option value="">Rate…</option>
            <option value="5">Perfect</option>
            <option value="4">Good</option>
            <option value="3">Average</option>
            <option value="2">Not that bad</option>
            <option value="1">Very poor</option>
          </select>
        </div>
        <form action="#" className="w-3/4 font-secondary">
          <textarea
            id="reply-message"
            className="w-full h-20 mb-2 p-4"
            placeholder="Comment *"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 my-2 bg-primary text-neutral text-xl rounded"
            onClick={(e) => handleWriteReview(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default WriteReview