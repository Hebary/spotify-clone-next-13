'use client';

import { FC, useEffect, useState } from 'react'
import { Modal } from '@/ui';


interface Props{
}

const ModalProvider:FC<Props> = () => {

    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, [])
    
    if(!isMounted){
        return null;
    }

    return (
        <>
            <Modal 
                title={'Modal Title'} 
                description={'Modal description'} 
                isOpen 
                onChange={()=>{}}
            >
                test children
            </Modal> 
        </>
    )
}

export default ModalProvider;