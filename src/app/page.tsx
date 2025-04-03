"use client";
import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CoachingWebsite = () => {
  let images = [
    "/picture/group_picture.png",
    "/picture/scroll.PNG",
    "/picture/scroll1.PNG",
    "/picture/scroll2.PNG",
    "/picture/scroll3.PNG",
  ];
  let rever_image = [
    "/picture/scroll3.PNG",
    "/picture/scroll2.PNG",
    "/picture/scroll4.PNG",
    "/picture/scroll.PNG",
    "/picture/group_picture.png",
  ];
  let [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 flex flex-wrap items-center ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-block bg-gray-200 px-4 py-2 rounded-md">
            <p className="text-sm text-gray-700">SZSC Establish In 2013</p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Having a good <span className="text-indigo-600">attitude</span> is
            very important to succeed in life.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our career coaching methodology guides you on a deep
            transformational journey to find...
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href={"https://ai-trian-xvczyndbhs4se5hxrbqqby.streamlit.app/"}>
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-md hover:bg-indigo-900 transition duration-300">
              Ai Assistant
            </button>
            </Link>
            <Link href={"/online_form"}>
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300">
              Online From
            </button>
            </Link>
          </div>
        </div>

        {/* Right Content with Image */}
        <div className="w-full lg:w-1/2  lg:mt-0 relative mt-32">
          <div className="bg-indigo-100 rounded-full w-full h-full absolute top-0 left-0 -z-10"></div>
          <div className="relative z-10">
            <Image
              src="/picture/sir_zain_logo.png"
              alt="Coach"
              className="mx-auto rounded-full"
              width={500}
              height={500}
            />

            {/* Features card */}
            <div className="absolute -right-4 md:right-3 top-1/2 bg-indigo-800 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">
                Organize Your Life in 29 days with flexcoach
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <span className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center mr-1">
                    1
                  </span>
                  <span className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center mr-1">
                    2
                  </span>
                  <span className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                    3
                  </span>
                </div>
                <p className="ml-2 text-sm">Total Students</p>
              </div>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm">5.0 Points</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-0 top-0 w-32 h-32">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-800 opacity-20"
              >
                <path
                  fill="currentColor"
                  d="M0,100 L200,100 M100,0 L100,200"
                  strokeWidth="10"
                  stroke="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=" mx-auto px-6 py-16 bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-800">3k+</h3>
            <p className="text-gray-600 mt-2">Happy Students</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-800">10+</h3>
            <p className="text-gray-600 mt-2">Daily Class</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-800">12+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-800">1</h3>
            <p className="text-gray-600 mt-2">Professional Teacher</p>
          </div>
        </div>
      </div>

      {/* Additional Circle Decoration */}
      <div className="fixed left-0 top-1/3 -z-10">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="text-indigo-100"
        >
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>

      <div className="fixed right-0 bottom-1/3 -z-10">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          className="text-indigo-100"
        >
          <circle cx="75" cy="75" r="60" fill="currentColor" />
        </svg>
      </div>


{/* section 2 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            E-consulting is easy with{" "}
            <span className="text-indigo-600">FlexCoach</span>
          </h2>

          {/* Features Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { title: "Interactive Classes", icon: "📚" },
              { title: "Live Q/A", icon: "🎤" },
              { title: "Assignments", icon: "📝" },
              { title: "Progress Tracking", icon: "📈" },
              { title: "One-on-One Sessions", icon: "👨‍🏫" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center w-40 hover:scale-105 transition text-gray-700  cursor-default hover:bg-indigo-800 hover:text-white"
              >
                <span className="text-4xl">{feature.icon}</span>
                <p className="mt-2 text-sm font-semibold  text-center ">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="mt-12 flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/picture/OIP1.png"
                alt="grpup picture Mockup"
                className="rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-left mt-8 md:mt-0 md:pl-12">
              <h3 className="text-3xl font-semibold text-gray-800">
                Set up your own platform{" "}
                <span className="text-indigo-600">in seconds</span>
              </h3>
              <p className="text-gray-600 mt-4">
                You can create either your platform or your profile within
                seconds.
              </p>
              <p className="text-gray-500 mt-2">
                Create your profile for free and start offering consultations
                right away. If you want to build your brand, set up your own
                e-consulting platform with professional templates—no coding or
                integrations needed.
              </p>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>


{/* section 3 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="lg:container mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-4 [@media(max-width:639px)]:space-y-6">
          <div>
            <Image
              src={`${images[index]}`}
              alt=""
              width={618}
              height={500}
              className="rounded-lg h-[12rem] sm:h-[20rem] lg:h-[25rem] "
            />
          </div>

          <div>
            <Image
              src={`${rever_image[index]}`}
              alt=""
              width={618}
              height={500}
              className="rounded-lg h-[12rem] sm:h-[20rem] lg:h-[25rem]"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-3">
          <div
            className={`cursor-pointer w-20 h-[6px] rounded-xl ${
              index == 0 ? "bg-indigo-800" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex((index = 0));
            }}
          ></div>
          <div
            className={`cursor-pointer w-20 h-[6px] rounded-xl ${
              index == 1 ? "bg-indigo-800" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex((index = 1));
            }}
          ></div>
          <div
            className={`cursor-pointer w-20 h-[6px] rounded-xl ${
              index == 2 ? "bg-indigo-800" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex((index = 2));
            }}
          ></div>
          <div
            className={`cursor-pointer w-20 h-[6px] rounded-xl ${
              index == 3 ? "bg-indigo-800" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex((index = 3));
            }}
          ></div>
          <div
            className={`cursor-pointer w-20 h-[6px] rounded-xl ${
              index == 4 ? "bg-indigo-800" : "bg-gray-300"
            }`}
            onClick={() => {
              setIndex((index = 4));
            }}
          ></div>
        </div>
      </section>


{/* section 4 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/picture/book (1).png"
              alt="Coaching Session"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <span className="text-indigo-600 font-semibold tracking-wide">
              #About FlexCoach
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-3 leading-tight">
              We care about your{" "}
              <span className="text-indigo-600">life better</span>, <br /> you
              can trust us.
            </h2>
            <p className="text-gray-600 mt-4">
              Our life coaching methodology guides you to get to the root of the
              issue, clarify your core values & build lasting belief. Each step
              is backed by proven research & structured for long-term success.
            </p>
            <p className="text-gray-500 mt-2">
              The more you trust the coaching techniques, the higher level of
              transformation & success you can achieve.
            </p>
            <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition">
              Learn Life Course
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoachingWebsite;
