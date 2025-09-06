import React from 'react';
import AddToCard from './AddToCard';
import { IconX } from '@tabler/icons-react';

interface ModalProps {
    setShow: (show: boolean) => void;
    show: boolean;
}

const Modal: React.FC<ModalProps> = ({ setShow, show }) => {
    return (
        <div className={`w-[600px] bg-white shadow-2xl h-screen p-5 rounded-2xl`}>
            <div className='flex justify-end'>
                <button onClick={() => setShow(!show)} className='text-red-500 bg-red-100 rounded-full w-8 h-8 flex justify-center items-center'><IconX className='hover:rotate-90 duration-300 ease-in-out transition-all' /></button>
            </div>
            <div className='flex flex-col gap-y-5 mt-5'>
                <AddToCard />
            </div>

        </div>
    );
};

export default Modal;