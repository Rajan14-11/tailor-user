import { useAppSelector } from "@/Redux/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";


function Congratulations() {
  // const router = useRouter();
  // const isAuth = useAppSelector((state) => state.user.isAuthenticated);
  // useLayoutEffect(() => {
  //   if (!isAuth) {
  //     router.push("/login");
  //   }
  // }, []);
  return (
    <div className="page-container">
      <div className="congrats-card">
        <h1 className="font-secondary text-3xl">Congratulations!!</h1>
        <p className="font-primary text-xl">
          Thank you for choosing our tailor services. We look forward to working
          with you again!
        </p>
        <Link href="/homepage">
        <button className="font-secondary">Return to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default Congratulations;
