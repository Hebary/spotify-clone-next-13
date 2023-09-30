import { createContext, useContext, useEffect, useState } from 'react';
import { User, useSessionContext, useUser as useSupaUser  } from '@supabase/auth-helpers-react'
import { SubscriptionDetails, UserDetails } from '@/types'

type UserContextType = {
    accessToken : string | null,
    user: User | null,
    userDetails: UserDetails | null,
    isLoading: boolean;
    subscription: SubscriptionDetails | null;
}

export const UserCtx = createContext<UserContextType | undefined>(
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

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;

    const [isLoadingData, setisLoadingData] = useState(false);
    const [userDetails, setuserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<SubscriptionDetails | null>(null);

    //functions to get user details and subscription details from DB
    const getUserDetails = () => supabase.from('users').select('*').single();
    const getSubscription = () => supabase.from('subscriptions').select('*, prices(*, products(*))').in('status', ['trialing', 'active']).single();

    useEffect(() => {
      if (user && !isLoadingData && !userDetails && !subscription) {
        setisLoadingData(true);
        
        Promise.allSettled([getUserDetails(), getSubscription()]).then((results) => {
        
            const userDetailsPromise = results[0];
            const subscription = results[1];
            
            if(userDetailsPromise.status === 'fulfilled'){
                setuserDetails(userDetailsPromise.value.data as UserDetails);
            }
            
            if(subscription.status === 'fulfilled'){
                setSubscription(subscription.value.data as SubscriptionDetails);
            }

            setisLoadingData(false);
        })}
        
        else if(!user && !isLoadingUser && !isLoadingData){
            setuserDetails(null);
            setSubscription(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isLoadingUser])
    
    const value = {accessToken, user, userDetails, isLoading: isLoadingUser || isLoadingData, subscription};

    return <UserCtx.Provider value={value} {...props} />
}

export const useUser = () => {
    const context = useContext(UserCtx);

    if(context===undefined){
        throw new Error('user must be used within a UserContextProvider');
    }

    return context;
}