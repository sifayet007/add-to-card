"use client";
import { addToCard } from "@/store/feature/cardSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import React from "react";

export interface IPostData {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const PostCard = ({ data }: { data: IPostData[] }) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cardReducer);

    return (
        <>
            {data.slice(0, 20).map((post) => (
                <div
                    key={post.id}
                    className="border border-gray-300 p-5 rounded-2xl flex flex-col"
                >
              <h1 className="text-center mb-5 font-semibold text-gray-600">
                  User: {post.userId}
              </h1>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{post.body}</p>

              <div className="flex justify-end w-full mt-auto">
                  <button
                      onClick={() => dispatch(addToCard(post))}
                      className="cursor-pointer hover:bg-green-700 duration-300 transition-all py-1.5 px-3 bg-green-500 rounded-[10px] text-white"
                  >
                      {cart.post.some((item) => item.id === post.id) ? "Added" : "Add"}
                  </button>
              </div>
          </div>
      ))}
      </>
  );
};

export default PostCard;
