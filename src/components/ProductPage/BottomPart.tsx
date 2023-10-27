import Link from "next/link";
import React, { useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import HomeSlider from "../HomePage/Slider";

export const Description = ({product}:any) => {
  return (
    <div className="mt-4 mb-2">
      <div className="bg-slate-300 p-4 rounded">
        <div className="">
          <h3 className="text-2xl mb-2 font-secondary">Product Information</h3>
          <p className="py-2 text-xl font-primary" >
            {product?.description}
          </p>
          <ul className="mb-2 text-slate-600 font-primary">
            <li>
              Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
            </li>
            <li>Vivamus finibus vel mauris ut vehicula.</li>
            <li>
              Nullam a magna porttitor, dictum risus nec, faucibus sapien.
            </li>
          </ul>
          <p className="text-xl font-primary">
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AdditionalInfo = () => {
  return (
    <div className="mt-4 mb-2">
      <table className="border p-4 table-cell">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="font-secondary">OS</th>
            <td className="font-primary">MIUI 13</td>
          </tr>
          <tr>
            <th className="font-secondary">RAM</th>
            <td className="font-primary">6 GB</td>
          </tr>
          <tr>
            <th className="font-secondary">Product Dimensions</th>
            <td className="font-primary">16.4 x 0.9 x 7.4 cm; 200 Grams</td>
          </tr>
          <tr>
            <th className="font-secondary">Connectivity technologies</th>
            <td className="font-primary">Bluetooth, Infrared, Wi-Fi, USB</td>
          </tr>
          <tr>
            <th className="font-secondary">Special features</th>
            <td className="font-primary">
              Display: Tru display, True Color, Blue light reduction, Super
              resolution touch, Corning Gorilla Glass 5 protection, 3.5mm Audio
              Jack, IR Blaster, X-Axis linear motor, 5G enabled with support for
              12 5G bands, Wi-Fi 6, Bluetooth 5.3, 64MP ISOCELL Primary sensor
              8MP Ultrawide, 120° FOV 2MP Macro Sensor Video recording support-
              Upto 4K@30 fps Slow motion support Short Video | Movie frame |
              Tilt shift | Timed burst | VLOG Mode | Long exposure | Short video
              | Clone Mode | Time lapse | Panaroma | Documents mode | Pro Mode |
              AI Noise Reduction algorithm
            </td>
          </tr>
          <tr>
            <th className="font-secondary">Resolution</th>
            <td className="font-primary">1920 x 1080</td>
          </tr>
          <tr>
            <th className="font-secondary">Other camera features</th>
            <td className="font-primary">Rear, Front</td>
          </tr>
          <tr>
            <th className="font-secondary">Battery Power Rating</th>
            <td className="font-primary">5080</td>
          </tr>
          <tr>
            <th className="font-secondary">Whats in the box</th>
            <td className="font-primary">
              Redmi K50i 5G, Power adapter, USB cable, SIM eject tool, Warranty
              card, User guide, Clear soft case, Screen protector pre-applied on
              the phone
            </td>
          </tr>
          <tr>
            <th className="font-secondary">Manufacturer</th>
            <td className="font-primary">Redmi</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const Reviews = ({ratings}) => {

  return (
    <div className="mb-2 mt-4" id="reviews">
      <div className="gap-4">
        {
          ratings.length==0? <h1 className="text-center w-full my-12 font-secondary text-2xl">No reviews available.</h1>:
        <div className=" mb-4 p-4">
          <h3 className="text-2xl mb-8 font-secondary">
            Reviews ({ratings?.length})
          </h3>
          {ratings &&
            ratings.map((rating, index) => (
              <div className="pb-6 mb-8 border-b">
                <div className="bg-neutral p-4 rounded bg-white">
                  <div className="col-auto">
                    <h5 className="font-secondary">
                      <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                        {rating.userId.firstName} {rating.userId.lastName}
                      </a>
                    </h5>
                    <div className="ratings-container">
                      <div className="inline-block text-xl flex">


                        {Array(rating.rating > 1 ? Math.ceil(rating.rating) : 1)
                          .fill(rating.rating)
                          .map((_, i) => (
                            <p key={i}>🌟</p>
                          ))}
                      </div>
                    </div>
                    <span className="review-date mb-1">6 days ago</span>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <p className="font-primary ">{rating.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        }
      </div>
    </div>
  );
};

const BottomPart = ({ product }: any) => {
  const [showDescription, setShowDescription] = useState(true);
  const [ShowAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div>
      <div>
        <div className="w-full h-auto p-4">
          <ul className="flex justify-evenly items-center list-none flex-wrap font-secondary">
            <li
              className={`text-xl font-semibold cursor-pointer pb-2 ${
                showDescription && "border-b border-b-primary"
              }`}
              onClick={() => {
                setShowDescription(!showDescription);
                setShowAdditionalInfo(false);
                setShowReviews(false);
              }}
            >
              Description
            </li>
            <li
              className={`text-xl font-semibold cursor-pointer pb-2 ${
                ShowAdditionalInfo && "border-b border-b-primary"
              }`}
              onClick={() => {
                setShowAdditionalInfo(!ShowAdditionalInfo);
                setShowDescription(false);
                setShowReviews(false);
              }}
            >
              Additional Information
            </li>
            <li
              className={`text-xl font-semibold cursor-pointer pb-2 ${
                showReviews && "border-b border-b-primary"
              }`}
              onClick={() => {
                setShowReviews(!showReviews);
                setShowDescription(false);
                setShowAdditionalInfo(false);
              }}
            >
              Reviews
            </li>
          </ul>
        </div>
      </div>
      {showDescription && <Description product={product} />}
      {ShowAdditionalInfo && <AdditionalInfo />}
      {showReviews && <Reviews ratings={product?.ratings} />}
      <div className="w-full flex flex-col items-center ">
        <HomeSlider />
        <Link href={"/tailordetails"}>
          {/* <button className="w-48 bg-primary p-4 rounded text-neutral text-xl">Explore More</button> */}
          <UIButton title="Explore More" />
        </Link>
      </div>
    </div>
  );
};

export default BottomPart;
