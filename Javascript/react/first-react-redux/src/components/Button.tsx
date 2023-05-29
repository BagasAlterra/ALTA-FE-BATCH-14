import React, { FC } from 'react'

interface ButtonProps {
    id: string;
    label?: string;
    onClick?: React.MouseEventHandler
}

const Button: FC<ButtonProps> = ({ id, label, onClick }) => {
    return (
        <button
            id={id}
            className="w-full h-12 bg-blue-500 rounded-md text-white font-semibold"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button