"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useUser } from "@clerk/nextjs";

export default function CommentSection() {
  
  // is ky andar user ka comment araha hai
  let [newComment, setNewComment] = useState("");

  // is ky andar sary comment arhy hai
  const [comments, setComments] = useState<any>([]);

  //  is ky andar sanity ky anadr sy comment fetch kar raha ho
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await client.fetch(
          `*[_type=="comment"] | order(_createdAt desc)`
        );
        setComments(data);
      } catch (error) {
        console.log("Sanity data fetch error:", error);
      }
    };
    fetchComments(); // Pehle comments fetch karo
    //  Real-time listener to update comments instantly
    const subscription = client
      .listen(`*[_type=="comment"]`)
      .subscribe((update) => {
        if (update.result) {
          setComments((prevComments: any) => [update.result, ...prevComments]); // Naya comment add karo
        }
      });
    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, []);


  // agar user login nhi howa to ye show hoye ga
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg py-16 px-16 text-center max-w-md">
          <div className="inline-block mt-4 bg-blue-600 text-white px-10 py-5 rounded-lg hover:bg-blue-700 transition">
            Please wait
          </div>
        </div>
      </div>
    );
  }


  // is ky andar sanity ky andar comment ja rahy hai
  const handleCommentSubmit = async (e: any) => {
    e.preventDefault();

    //  is ky andar jo clerk.js sy image arahe hai us ko sanity amin send karny ky liye set kar raha ho
    const uploadImage = async (imageUrl: string) => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const imageAsset = await client.assets.upload("image", blob);
        return imageAsset._id;
      } catch (error) {
        console.error("Image upload error:", error);
        return null;
      }
    };
    const uploadedImageId = await uploadImage(user.imageUrl); // Pehle image upload karo

    //  is ky andar live date or time arahe hai
    let live_Date = new Date();
    // is ky andar live date arahe hai
    let current_date = live_Date.toLocaleDateString();
    // is ky andar live time arahe hai
    let current_time = live_Date.toLocaleTimeString();

    // saity ky andar data object hai
    let send_data = {
      _type: "comment",
      userName: `${user.fullName}`,
      commentText: newComment,
      commentTime: current_time,
      userImage: {
        _type: "image",
        asset: {
          _ref: `${uploadedImageId}`,
        },
      },
      commentDate: current_date,
    };

    //  sanity ky nadar data jaraha hai
    try {
      let pust_data = async () => {
        const response = await client.create(send_data);
      };
      pust_data();
      setNewComment((newComment = ""));
    } catch (error) {
      console.log("Not pust commnet in sanity");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {/* show comment section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            💬 Comments
          </h2>

          <div className="space-y-4 max-h-96 overflow-y-auto mb-4 pr-2">
            {comments.map((comment: any) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 p-3 md:p-4 rounded-lg flex items-start gap-3"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={`${urlFor(comment.userImage.asset._ref)}`}
                    alt="user avatar"
                    className="rounded-full w-8 h-8 md:w-10 md:h-10"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-700 text-sm md:text-base">
                    {comment.userName}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base break-words">
                    {comment.commentText}
                  </p>
                  <div className="text-end text-xs md:text-sm text-gray-500 mt-1">
                    {comment.commentDate}, {comment.commentTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* commnet input section */}
          <form
            onSubmit={handleCommentSubmit}
            className="mt-4 flex flex-col md:flex-row items-stretch md:items-end gap-2"
          >
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
              rows={2}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base whitespace-nowrap"
            >
              Post
            </motion.button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
