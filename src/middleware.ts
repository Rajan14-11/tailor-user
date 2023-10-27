import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";
import { useSelector } from "react-redux";

const protectedRoutes =['/detailCart','/checkout','/orderComplete']

export default middleware = (req:NextRequest) => {
  const auth = req.cookies.get("isUserAuthenticated");
  const url = req.url;
  console.log( url, auth);
  if (auth?.value == 'false' && protectedRoutes.includes(req.nextUrl.pathname))
    return NextResponse.redirect("http://localhost:3000/login");
};

export const config = {
  matcher:['/detailCart','/checkout','/orderComplete']
}
