import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

export default middleware = (req) => {
  const token = Cookies.get("token");
  const auth = req.cookies.get("isUserAuthenticated");
  const url = req.url;
  console.log(token, url, auth);
  if (auth == false && url.includes("/homepage"))
    return NextResponse.redirect("http://localhost:8000/login");
  else if (
    token !== undefined &&
    url === "http://localhost:8000/login"
  )
    return NextResponse.redirect("http://localhost:8000/homepage");
};
