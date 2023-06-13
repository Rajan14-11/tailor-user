import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { UIButton } from "../Common/Buttons/UIButton";


const Header = () => {
  const {asPath} = useRouter()

  return (
    <nav className="flex flex-col">
      <div className="flex justify-between bg-primary py-1 px-4 items-center hidden md:flex">
        <p className="text-white font-bold font-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptates!
        </p>
        <Link href={"/homepage"}>
        <button className="btn bg-neutral outline-white p-1 text-sm text-primary font-bold rounded font-secondary ">
          Book Now
        </button>
        </Link>
      </div>
      <div className=
{asPath==="/login" || asPath==='/signup' ? "bg-login-gradient" : ""}>

        <div className="flex justify-between mt-2 items-center px-4">
          <Link href={"/"}>
            <div className="text-white cursor-pointer">Logo</div>
          </Link>
          <div>
            <Link href="/login">
              <button className="mb-1 font-secondary bg-white py-1 sm:py-2 px-1 sm:px-4 md:m-2 text-sm sm:text-base rounded text-black hover:bg-primary hover:text-white ease-in duration-200 ">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className=" py-1 font-secondary sm:py-2 px-2 sm:px-4 sm:m-2 rounded text-sm sm:text-base text-white font-bold bg-primary hover:bg-white hover:text-black ease-in duration-200 ">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header