'use client';

import { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Modal from './Modal';
import { useAuthModal } from '@/hooks';




const AuthModal:FC = () => {
    
    const sbClient = useSupabaseClient();
    const router = useRouter();
    const session = useSessionContext();
    const { isOpen, onClose } = useAuthModal();

    const onChange =  (open: boolean) => {
        if(!isOpen) {
            onClose();
        }
    }

    useEffect(() => {
        if(session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

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
                providers={['google', 'github']}
                appearance={{
                    theme: ThemeSupa ,
                    variables: {
                    default :{
                        colors:{
                            brand: '#404040',
                            brandAccent: '#22C55E'
                            },
                        }
                    }
                }}
                />
        </Modal>
    )
}

export default AuthModal;