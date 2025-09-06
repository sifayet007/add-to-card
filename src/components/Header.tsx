import { IconShoppingCart } from '@tabler/icons-react';
import React from 'react';

const Header = () => {
    const reactFragment = "</>"
    return (
        <nav className='py-4 shadow p-4 fixed backdrop-blur-3xl bg-white/10 w-full top-0'>
            <div className='max-w-[1320px] mx-auto flex justify-between'>
                <h1>{reactFragment}</h1>
                <div className='flex gap-x-10'>
                    <span className='text-sm font-medium cursor-pointer'>Home</span>
                    <span className='text-sm font-medium cursor-pointer'>Blog</span>
                    <span className='text-sm font-medium cursor-pointer'>About</span>
                </div>
                <h3>
                    <span className='cursor-pointer'><IconShoppingCart /></span>
                </h3>
            </div>
        </nav >
    );
};

export default Header;