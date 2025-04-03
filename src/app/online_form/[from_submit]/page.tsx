"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState } from "react";

function SuccessPage({ params }: { params: { from_submit: string } }) {

  let student_name : string = params.from_submit;
  let remove_space = student_name.replaceAll("%20"," ")

  let [display,setdisplay] = useState(false)

  return (
    <> 
   <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-indigo-200 text-center p-6 -mb-12">
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-8 max-w-md">
            <h1 className="text-3xl font-bold text-green-700 mb-4 flex items-center justify-center">
            🎉 Congratulations {remove_space}, Your Registration is Complete!
            </h1>
            <p className="text-gray-600">Your form has been submitted successfully.</p>
            <p className="text-gray-500">You will contact this number <span className="font-bold">+923456565476</span> .</p>

            <Link href="/">
            <button className={`${display? "hidden" : "block"} mt-5 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md mx-auto`} onClick={()=>{setdisplay(!display)}}>
                Go to Home
            </button>
            </Link>
        </div>
        </div>
    <Footer />
    </>
  );
}



export default  SuccessPage