"use client";

import { Database } from '@/types_db';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

'use client';

import { FC, useState } from 'react'


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