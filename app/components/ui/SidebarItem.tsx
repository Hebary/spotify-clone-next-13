'use client';

import Link from 'next/link';
import { FC } from 'react'
import { IconType } from 'react-icons/lib';
import { twMerge } from 'tailwind-merge';


interface Props{
    icon: IconType
    label: string
    active?: boolean
    href: string
}

const SidebarItem:FC<Props> = ({ icon:Icon, label, active, href }) => {
     return (
        <Link
            href={href}
            className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 py-1 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 ` , active && 'text-white')}
        >
            <Icon size={26}/>
            <p className='truncate w-full'>{label}</p>            
        
        </Link>
    )
}

export default SidebarItem;