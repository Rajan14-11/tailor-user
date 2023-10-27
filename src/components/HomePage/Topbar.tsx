import Images from "@/assets/Images";
import { useStateContext } from "@/Context/ContextState";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillDropboxSquare,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { RiLogoutBoxFill, RiProfileFill } from "react-icons/ri";
import {BsFillBookmarkHeartFill} from "react-icons/bs"
import Dropdown from "../Common/UI/Dropdown";
import SelectLocation from "./SelectLocation";
import SideCart from "./SideCart";
import { loginSlice, logout } from "@/Redux/userSlice";
import Cookies from "js-cookie";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { emptyCart } from "@/Redux/cartSlice";

interface Props {
  show: boolean;
  setShow: Function;
}

const RenderLoggedInMenu = ({ show, setShow }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleLogout() {
    Cookies.remove("token");
    router.push("/");
    dispatch(logout());
    Cookies.set("isUserAuthenticated", "false");
    Cookies.set("user", "");
    // dispatch(emptyCart(''))
  }
  return (
    <Dropdown
      show={show}
      setShow={setShow}
      menus={[
        { label: "My Profile", href: "", icon: <RiProfileFill /> },
        {
          label: "Orders",
          href: `/orders`,
          icon: <AiFillDropboxSquare />,
        },
        {
          label: "Wishlist",
          href: "/wishlist",
          icon: <BsFillBookmarkHeartFill />,
        },
        {
          label: "Logout",
          href: "",
          icon: <RiLogoutBoxFill />,
          onClick: handleLogout,
        },
      ]}
    />
  );
};

const RenderNonLoggedInMenu = ({ show, setShow }: Props) => {
  return (
    <Dropdown
      show={show}
      setShow={setShow}
      menus={[
        { label: "SignIn", href: "/login", icon: null },
        { label: "SignUp", href: "/signup", icon: null },
        { label: "Need Help", href: "/", icon: null },
      ]}
    />
  );
};

function Topbar() {
  const dispatch = useAppDispatch();
  const token = Cookies.get("token");
  useEffect(() => {
    if (Cookies.get("isUserAuthenticated") == "true") {
      console.log("indide ");
      dispatch(loginSlice({ token }));
    }
  }, []);
  let location;
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("address"))
      location = JSON.parse(window.localStorage.getItem("address"));
  }
  const user = useAppSelector((state) => state.user.isAuthenticated);

  // console.log(user);
  const [show, setShow] = useState(false);
  const {
    openCart,
    setOpenCart,
    selectLocation,
    setSelectLocation,
    search,
    setSearch,
  } = useStateContext();
  // console.log(openCart);
  return (
    <div className="flex justify-evenly items-center w-full h-16 px-4 bg-neutral sticky top-0 z-[100] font-secondary">
      <Link href={"/homepage"} className="w-1/4 sm:w-[10%] h-full mr-2 py-4">
        <Image className="w-3/4 h-full" src={Images.service1} alt="logo" />
      </Link>
      <div className="w-[25%] mr-4 py-4">
        <button
          type="submit"
          className=" w-full flex hover:text-primary justify-start flex-col sm:flex-row"
          onClick={() => setSelectLocation(true)}
        >
          <span className="text-secondary mr-4 border-b border-secondary hover:text-primary font-semibold ">
            Other
          </span>
          <p
            className="text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden w-full hover:text-slate-400 w-3/4 flex-start flex"
            suppressHydrationWarning
          >
            {location?.formatted_address}
          </p>
        </button>
      </div>

      <div className="py-4 w-[10%] sm:w-[35%] flex relative justify-end border-primary items-center mr-4 hover:text-primary">
        <AiOutlineSearch className="sm:absolute left-0 text-2xl sm:w-1/6 mr-2 " />
        <input
          type={"search"}
          placeholder="search"
          className="w-5/6 p-2 hidden sm:block font-neutral"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        className="w-fit flex items-center h-full"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <AiOutlineUser
          onMouseEnter={() => setShow(true)}
          className="text-2xl mr-2 hover:text-primary"
        />
        {user ? (
          <button
            className="sm:block hidden hover:text-primary"
            onMouseEnter={() => setShow(true)}
          >
            {Cookies.get("user") !== undefined &&
              JSON.parse(Cookies.get("user")).fullName}
          </button>
        ) : (
          // <Link href={"/login"}>
          <button className="sm:block hidden hover:text-primary"></button>
          // </Link>
        )}
        {user ? (
          <RenderLoggedInMenu show={show} setShow={setShow} />
        ) : (
          <RenderNonLoggedInMenu show={show} setShow={setShow} />
        )}
      </div>

      {user ? (
        <Link
          href={"/detailCart"}
          className="flex items-center cursor-pointer hover:text-secondary "
          // onClick={() => setOpenCart(true)}
        >
          <AiOutlineShoppingCart className="mr-2 text-xl relative cursor-pointer" />
          {/* <div className="cursor-pointer absolute top-[9.3%] bg-primary rounded-full p-1 h-[20px] w-[20px] text-center flex items-start hover:text-neutral"> */}
          {/* <p className="absolute top-[-3%] left-[30%]">0</p> */}
          {/* </div> */}
          <p className="hidden sm:block">Cart</p>
        </Link>
      ) : (
        ""
      )}
      {selectLocation && <SelectLocation />}
      {openCart && <SideCart />}
    </div>
  );
}

export default Topbar;
