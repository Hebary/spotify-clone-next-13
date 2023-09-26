"use client";

import { FC, useState } from 'react'
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '@/types_db';




interface Props{
    children: React.ReactNode
}

const SupabaseProvider:FC<Props> = ({ children }) => {
 
    const [SupabaseCliente] = useState(() => 
        createClientComponentClient<Database>()
    )

    return (<SessionContextProvider supabaseClient={SupabaseCliente}/>)
}

export default SupabaseProvider;