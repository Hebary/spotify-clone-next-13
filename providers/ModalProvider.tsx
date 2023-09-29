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
                title={'test modal'} 
                description={'test description'} 
                isOpen={true} 
                onChange={()=>{}}
            >
                test
            </Modal> 
        </>
    )
}

export default ModalProvider;