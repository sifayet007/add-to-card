"use client"
import React from 'react';
import { IPostData } from './PostCard';
import { useDispatch } from 'react-redux';
import { useAppSilector } from '@/store/hooks';

const AddToCard = () => {
    const Dispatch = useDispatch()
    const card = useAppSilector(state => state.cardReducer)
    console.log("add to card", card)
    return (
        <div>
            <h1>{ }</h1>
            <p className='line-clamp-2'>{ }</p>
        </div>
    );
};

export default AddToCard;