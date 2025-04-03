"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  let [display, setdisplay] = useState<boolean>(false);
  console.log(display);
  return (
    <>
      {/* Navigation */}
      <nav className=" mx-auto flex items-center justify-between py-5 sm:px-6 px-5 md:px-10 xl:px-16  bg-white">
        <div className="flex items-center">
          <span className="flex items-center  justify-between space-x-2">
            <Image
              src={"/picture/logo.PNG"}
              alt="Logo"
              width={35}
              height={30}
            />
            <h1 className="text-2xl font-bold text-indigo-800">SZSC</h1>
          </span>
        </div>

        <div
          className={`w-[50%] sm:w-[40%] [@media(max-width:768px)]:pl-5 [@media(max-width:768px)]:py-28 [@media(max-width:768px)]:h-[30rem] [@media(max-width:768px)]:bg-indigo-950 [@media(max-width:768px)]:rounded-r-3xl  [@media(max-width:768px)]:absolute [@media(max-width:768px)]:left-0 [@media(max-width:768px)]:top-[77px] [@media(max-width:768px)]:space-y-36 [@media(max-width:768px)]:flex-col ${display ? "block" : "hidden"} md:flex md:items-center md:w-[65%] md:justify-between`}
        >
          <div className=" flex md:items-center md:space-x-8  [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:space-y-6 ">
            <Link
              href="/"
              className="text-gray-400 md:text-gray-700 hover:text-indigo-800 hover:text-lg hover:font-bold "
            >
              Home
            </Link>
            <Link
              href="https://ai-trian-xvczyndbhs4se5hxrbqqby.streamlit.app/"
              className="text-gray-400 md:text-gray-700 hover:text-indigo-800 hover:text-lg hover:font-bold"
            >
              Ai Assistant
            </Link>
            <Link
              href="/online_form"
              className="text-gray-400 md:text-gray-700 hover:text-indigo-800 hover:text-lg hover:font-bold"
            >
              Online From
            </Link>
            <Link
              href="/review"
              className="text-gray-400 md:text-gray-700 hover:text-indigo-800 hover:text-lg hover:font-bold"
            >
              Review
            </Link>
            {/* <Link href="#" className="text-gray-700 hover:text-indigo-800 hover:text-lg hover:font-bold">Contact</Link> */}
          </div>

          {/* <div className="flex items-center space-x-4">
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-md hover:bg-indigo-900 transition duration-300">
              Sign in
            </button>
          </div> */}
            






            <div>
          {/* ye clerk.js ky components hai  */}
          <SignedOut>
            <div className=" ">
              <SignInButton>
              <button className="bg-indigo-800 text-white px-4 py-2 rounded-md hover:bg-indigo-900 transition duration-300">
              Sign in
             </button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center justify-end  ">
              <UserButton
                appearance={{
                  elements: {
                    userButtonTrigger:
                      "px-1 py-1   text-white font-medium rounded  transition",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      










            
        </div>

        <div
          className="md:hidden block"
          onClick={() => {
            setdisplay(!display);
          }}
        >
          <Image
            src={"/picture/three-row-icon.png"}
            alt="3 row"
            width={27}
            height={27}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
