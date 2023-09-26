'use client';

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'


interface Props {
    children     : React.ReactNode;
    description  : string;
    title        : string;
    isOpen       : boolean;
    onChange     : (open: boolean) => void;
}

const Modal:FC<Props> = ({ children, description, isOpen, onChange, title }) => {
     return (
        <div> 
            <Dialog.Root open={isOpen} onOpenChange={onChange}>

                
            </Dialog.Root>
        </div>
    )  
}

export default Modal;  