'use client';

import { FC, useEffect, useState } from 'react'
import { Modal } from '@/ui';


interface Props{
    children: React.ReactNode
}

const ModalProvider:FC<Props> = ({ children }) => {

    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, [])
    
    if(!isMounted){
        return null;
    }

    return (
        <>
            <Modal title={'test modal'} description={'test description'} isOpen={false} onChange={()=>{}}>
                {'children'}    
            </Modal> 
        </>
    )
}

export default ModalProvider;