"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { client } from "@/sanity/lib/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

type FormData = {
  name: string;
  fatherName: string;
  schoolOrCollege: string;
  dob: string;
  lastResult: string;
  phone: string;
  address: string;
};




export default function StudentForm() {
  const router = useRouter();
  // is ky nadar react hoot ky function use kar rahy hain jo ky form ky data ko handle karta hai
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  // agar user login nhi howa to ye show hoye ga
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg py-16 px-16 text-center max-w-md">
          <div
            className="inline-block mt-4 bg-blue-600 text-white px-10 py-5 rounded-lg hover:bg-blue-700 transition"
          >
            Please wait
          </div>
        </div>
      </div>
    );
  }


  
  const onSubmit = (data: FormData) => {
    //  is ky andar live date or time arahe hai
    let live_Date = new Date();
    // is ky andar live date arahe hai
    let current_date = live_Date.toLocaleDateString();
    // is ky andar live time arahe hai
    let current_time = live_Date.toLocaleTimeString()

    let send_form=  {
        _type: "student",
        name: data.name,
        schoolOrCollege: data.schoolOrCollege,
        fatherName: data.fatherName,
        address: data.address,
        lastResult: data.lastResult,
        phone: data.phone,
        date : current_date,
        time: current_time,
        email :`${ user.emailAddresses[0]?.emailAddress}` // is ky andar clerk.js sy email arahe hai
      }

    // sanity ky andar data jaraha hai
    try{
      let push_data=async()=>{ // create sy sanity main data jaraha hai
       const response = await client.create(send_form);
      }
      push_data()
      console.log("successfull")
      router.push(`/online_form/${data.name}%20`)
    }
    catch{
      console.log("something was wrong sanity pust error ")
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 mt-12">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Student Registration Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Student Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            {/* Father Name */}
            <input
              {...register("fatherName", { required: "Father's Name is required" })}
              type="text"
              placeholder="Father's Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.fatherName && <p className="text-red-500">{errors.fatherName.message}</p>}

            {/* School/College */}
            <input
              {...register("schoolOrCollege", { required: "School/College is required" })}
              type="text"
              placeholder="School / College Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.schoolOrCollege && <p className="text-red-500">{errors.schoolOrCollege.message}</p>}

            {/* Date of Birth */}
            <input
              {...register("dob", { required: "Date of Birth is required" })}
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

            {/* Last Result */}
            <input
              {...register("lastResult", { required: "Last Exam Result is required" })}
              type="text"
              placeholder="Last Exam Result"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.lastResult && <p className="text-red-500">{errors.lastResult.message}</p>}

            {/* Phone Number */}
            <input
              {...register("phone", { required: "Phone Number is required" })}
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

            {/* Address */}
            <textarea
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            {errors.address && <p className="text-red-500">{errors.address.message}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
