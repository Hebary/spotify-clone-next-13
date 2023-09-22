import { createContext } from 'react';
import { User, useSessionContext } from '@supabase/auth-helpers-react'
import { SubscriptionDetails, UserDetails } from '@/types'

type UserContextType = {
    accesToken : string | null,
    user: User | null,
    userDetails: UserDetails | null,
    isLoading: boolean;
    subscription: SubscriptionDetails | null;
}

export const userCtx = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName: string] : any;
}

export const UserContextProvider = (props : Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase,
    } = useSessionContext();
}