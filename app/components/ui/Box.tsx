'use client';

import { FC } from 'react'


interface Props{
    children?: React.ReactNode,
    className?: string,
}

const Box:FC<Props> = ({children, className}) => {
        return (
            <div>
                {children}
            </div>
    )
}

export default Box;