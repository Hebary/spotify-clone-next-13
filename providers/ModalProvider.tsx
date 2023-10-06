'use client';

import { FC, useEffect, useState } from 'react'
import { AuthModal, Modal } from '@/ui';

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
            <AuthModal 
                title={'Auth Modal Title'} 
                isOpen 
                onChange={()=>{}}
                description={'Auth Modal Description'}
            >
                Test Children
            </AuthModal> 
        </>
    )
}

export default ModalProvider;