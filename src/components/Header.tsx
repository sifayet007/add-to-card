"use client";
import { IconShoppingCart } from "@tabler/icons-react";
import React, { useState } from "react";
import Modal from "./Modal";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
    const [show, setShow] = useState(false);
    const reactFragment = "</>";
    const card = useAppSelector((state) => state.cardReducer);

    return (
        <nav className="py-4 shadow p-4 fixed backdrop-blur-3xl bg-white/10 w-full top-0 z-50">
            <div className="max-w-[1320px] mx-auto flex justify-between items-center">
                <h1 className="font-bold text-lg">{reactFragment}</h1>

                <div className="flex gap-x-10">
                    <span className="text-sm font-medium cursor-pointer">Home</span>
                    <span className="text-sm font-medium cursor-pointer">Blog</span>
                    <span className="text-sm font-medium cursor-pointer">About</span>
                </div>

                <h3>
                    <button
                        onClick={() => setShow(!show)}
                        className="cursor-pointer relative"
                    >
                        <IconShoppingCart />
                        {card.post.length > 0 && (
                            <span className="absolute -top-3 -right-2 bg-green-400 w-5 h-5 rounded-full flex justify-center items-center text-sm">
                                {card.post.length}
                            </span>
                        )}
                    </button>
                </h3>

                {show && (
                    <div className="absolute top-14 right-4">
                        <Modal setShow={setShow} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
