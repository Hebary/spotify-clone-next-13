'use client';

import { FC, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import { Database } from '@/types_db';




interface Props{
    children: React.ReactNode
}

const SupabaseProvider:FC<Props> = ({ children }) => {
 
    const [SupabaseClient] = useState(() => 
        createClientComponentClient<Database>()
    )

    return (
        <SessionContextProvider supabaseClient={ SupabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider;