'use client';

import { FC } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPlay } from 'react-icons/fa';


interface Props{
    image: string;
    name : string;
    href : string;
}

const ListItem:FC<Props> = ({ name, image, href }) => {
    
    const router = useRouter();
    const onClick = () => {
        //Auht before push
        router.push(href)
    }


    return (
        // group className Usage
        <button
            className='relative group flex items-center rounded-md gap-x-4 overflow-hidden bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 cursor-pointer'
        >
            
            <div className='relative min-h-[64px] min-w-[64px]'>
                <Image
                    className='object-cover'
                    fill
                    src={"/images/liked.png"}
                    alt={name}
                />
            </div>     
            <p className='font-medium truncate py-5'>
                {name}
            </p>
            
            <div className='absolute transition opacity-0 rounded-full flex items-center p-4 justify-center bg-green-500 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
                <FaPlay className='text-black'/>
            </div>
        </button>
    )
}

export default ListItem;