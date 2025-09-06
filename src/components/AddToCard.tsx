"use client"
import React from 'react';
import { IPostData } from './PostCard';
import { useDispatch } from 'react-redux';
import { useAppSilector } from '@/store/hooks';
import { removeCard } from '@/store/feature/cardSlice';
import { IconX } from '@tabler/icons-react';

const AddToCard = () => {
    const Dispatch = useDispatch()
    const card = useAppSilector(state => state.cardReducer)
    console.log("ADD TO CARD", card.post)
    return (
        <>
            {
                card.post.map((item: IPostData) => (

                    <div key={item.id} className='flex justify-between gap-10 items-center'>
                        <div>
                            <h1 className='text-[16px] font-semibold'>{item.title}</h1>
                            <p className='line-clamp-2 text-xs'>{item.body}</p>
                        </div>
                        <div>
                            <button onClick={() => Dispatch(removeCard(item.id))}><IconX /></button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default AddToCard;