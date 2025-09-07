"use client";
import React from "react";
import { IPostData } from "./PostCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeCard } from "@/store/feature/cardSlice";
import { IconX } from "@tabler/icons-react";
interface CardState {
        post: IPostData[];
    }
const AddToCard = () => {
    const dispatch = useAppDispatch();
    const card: CardState = useAppSelector((state: { cardReducer: CardState }) => state.cardReducer);

    console.log("ADD TO CARD", card.post);

    return (
        <div className="flex flex-col gap-4">
            {card.post.map((item: IPostData) => (
                <div
                    key={item.id}
                    className="flex justify-between gap-10 items-center border p-3 rounded-lg shadow-sm"
                >
                    <div>
                        <h1 className="text-[16px] font-semibold">{item.title}</h1>
                        <p className="line-clamp-2 text-xs text-gray-600">{item.body}</p>
                    </div>
                    <button
                        onClick={() => dispatch(removeCard(item.id))}
                        className="p-1 rounded-full hover:bg-red-100 transition-colors"
                        aria-label="Remove item"
                    >
                        <IconX className="text-red-500" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AddToCard;
