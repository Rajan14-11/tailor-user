import Link from "next/link";
import React, { useState } from "react";
import { UIButton } from "../Common/Buttons/UIButton";
import HomeSlider from "../HomePage/Slider";

export const Description = () => {
  return (
    <div className="mt-4 mb-2">
      <div className="bg-slate-300 p-4 rounded">
        <div className="">
          <h3 className="text-2xl mb-2 font-secondary">Product Information</h3>
          <p className="py-2 text-xl font-primary" >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
            ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
            ligula vulputate sem tristique cursus.
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
            ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
            ligula vulputate sem tristique cursus.
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

export const Reviews = () => {
  const [writeReview, setWriteReview] = useState(false);
  return (
    <div className="mb-2 mt-4" id="reviews">
      <div className="gap-4">
        <div className=" mb-4 p-4">
          <h3 className="text-2xl mb-8 font-secondary">Reviews (2)</h3>
          <div className="pb-6 mb-8 border-b">
            <div className="bg-neutral p-4 rounded bg-white">
              <div className="col-auto">
                <h5 className="font-secondary">
                  <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                    Samanta J.
                  </a>
                </h5>
                <div className="ratings-container">
                  <div className="inline-block text-xl ">
                    <div
                      className="inline-block text-xl"
                      style={{ width: "60%" }}
                    ></div>
                    <span className="absolute left-1/2 top-auto bottom-[150%] text-xl bg-primary text-neutral p-3 overflow-visible -translate-x-1/2 visibility-hidden opacity-0 after:absolute after:left-inherit after:top-[96%] after:ml-[-6px] after:border after:border-t-soil ">
                      3.00
                    </span>
                  </div>
                </div>
                <span className="review-date mb-1">6 days ago</span>
              </div>
              <div className="col">
                <h5>Good, perfect size</h5>
                <div className="mb-3">
                  <p className="font-primary ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus cum dolores assumenda asperiores facilis porro
                    reprehenderit animi culpa atque blanditiis commodi
                    perspiciatis doloremque, possimus, explicabo, autem fugit
                    beatae quae voluptas!
                  </p>
                </div>
                <div className="text-base">
                  <a
                    className="text-slate-600"
                    href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#"
                  >
                    <i className="icon-thumbs-up"></i>Helpful (2)
                  </a>
                  <a
                    className="ml-6"
                    href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#"
                  >
                    <i className="icon-thumbs-down"></i>Unhelpful (0)
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral p-4 rounded bg-white">
            <div className="row no-gutters">
              <div className="col-auto">
                <h5 className="font-secondary">
                  <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                    John Doe
                  </a>
                </h5>
                <div className="ratings-container">
                  <div className="inline-block text-xl">
                    <div
                      className="inline-block text-xl"
                      style={{ width: "60%" }}
                    ></div>
                    <span className="tooltip-text">3.00</span>
                  </div>
                </div>
                <span className="review-date mb-1">5 days ago</span>
              </div>
              <div className="col">
                <h5>Very good</h5>
                <div className="mb-6">
                  <p className="font-primary">
                    Sed, molestias, tempore? Ex dolor esse iure hic veniam
                    laborum blanditiis laudantium iste amet. Cum non voluptate
                    eos enim, ab cumque nam, modi, quas iure illum repellendus,
                    blanditiis perspiciatis beatae!
                  </p>
                </div>
                <div className="text-base">
                  <a
                    className="text-slate-600"
                    href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#"
                  >
                    <i className="icon-thumbs-up"></i>Helpful (0)
                  </a>
                  <a
                    className="ml-6"
                    href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#"
                  >
                    <i className="icon-thumbs-down"></i>Unhelpful (0)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-4">

          <UIButton title="Add a Review"
              onClick={() => setWriteReview(true)}
          />
        </div>

        {writeReview && (
          <div className="py-8 px-4 bg-neutral my-4 rounded">
            <div className="title-wrapper text-left">
              <h3 className="font-semibold font-secondary text-2xl mb-4 title-simple text-left text-normal">
                Add a Review
              </h3>
              <p style={{ fontSize: 18 }} className="font-primary">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
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
              ></textarea>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-full p-4 mb-4 "
                    id="reply-name"
                    name="reply-name"
                    placeholder="Name *"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="w-full p-4 mb-4"
                    id="reply-email"
                    name="reply-email"
                    placeholder="Email *"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="signin-remember"
                  name="signin-remember"
                />
                <label
                  className="text-slate-700 ml-2"
                  htmlFor="signin-remember"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button
                type="submit"
                className="px-4 py-2 my-2 bg-primary text-neutral text-xl rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const BottomPart = () => {
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
      {showDescription && <Description />}
      {ShowAdditionalInfo && <AdditionalInfo />}
      {showReviews && <Reviews />}
      <div className="w-full flex flex-col items-center ">
        <HomeSlider/>
        <Link href={"/tailordetails"}>
        {/* <button className="w-48 bg-primary p-4 rounded text-neutral text-xl">Explore More</button> */}
        <UIButton title="Explore More"/>
        </Link>
      </div>
    </div>
  );
};

export default BottomPart;
