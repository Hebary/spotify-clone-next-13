'use client';

import { FC } from 'react'
import { useRouter } from 'next/navigation';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Modal from './Modal';


interface Props {
    isOpen       : boolean;
    onChange     : (open: boolean) => void;
    children     : React.ReactNode;
    description  : string;
    title        : string;
}


const AuthModal:FC<Props> = ({ title, description, isOpen, onChange }) => {
    
    const sbClient = useSupabaseClient();
    const router = useRouter();
    const session = useSessionContext();


    return (
        <Modal
            title={'Welcome Back!'}
            description={'Login to your account'}
            isOpen
            onChange={() => {}}

        >
            <Auth
                theme={'dark'} 
                supabaseClient={ sbClient }
                appearance={{
                    theme: ThemeSupa ,
                    variables: {
                    default :{
                        colors:{
                            brand: '#404040',
                            brandAccent: '#22C55E'
                            }
                        }
                    }
                }}
                />
        </Modal>
    )
}

export default AuthModal;