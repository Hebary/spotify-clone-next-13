'use client';

import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'


interface Props {
    isOpen       : boolean;
    onChange     : (open: boolean) => void;
    children     : React.ReactNode;
    description  : string;
    title        : string;
}

const Modal:FC<Props> = ({ children, description, isOpen, onChange, title }) => {
     return (
            <Dialog.Root 
                defaultOpen={isOpen}
                onOpenChange={onChange}
                open={isOpen}
            >
                <Dialog.Portal>
                    <Dialog.Overlay className='fixed inset-0 bg-neutral-900/90 backdrop-blur-sm' />
                    <Dialog.Content className='fixed drop-shadow-md top-[50%] left-[50%] border-neutral-700 max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[50%] translate-y-[50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none'>
                        <Dialog.Title className='text-xl text-center font-bold mb-4'>
                          {title}  
                        </Dialog.Title>
                        <Dialog.Description>
                          {description}
                        </Dialog.Description>
                        <div>
                            {children}
                        </div>
                        <Dialog.Close asChild>
                            <button className='text-neutral-400 absolute hover:text-white top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none'>
                                <IoMdClose className='w-6 h-6 text-neutral-400 hover:text-neutral-300' />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
    )  
}

export default Modal;  