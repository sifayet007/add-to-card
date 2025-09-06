"use client"
import { addToCard } from '@/store/feature/cardSlice';
import { useAppSilector } from '@/store/hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
export interface IPostData {
    id: number
    userId: number,
    title: string,
    body: string,
}

const PostCard = ({ data }: { data: IPostData[] }) => {

    const dispatch = useDispatch()
    const data2 = useAppSilector((state) => state.cardReducer)
    console.log("data 2 ", data2)

    return (
        <>
            {data.slice(0, 20).map((post) => (
                <div
                    key={post.id}
                    className="border border-gray-300 p-5 rounded-2xl flex flex-col"
                >
                    <h1 className="text-center mb-5">{post.userId}</h1>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p>{post.body}</p>

                    <div className="flex justify-end w-full mt-auto">
                        <button onClick={() => dispatch(addToCard((post)))} className="cursor-pointer hover:bg-green-700 duration-300 transition-all py-1.5 px-2.5 bg-green-500 rounded-[10px] text-white">
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PostCard;