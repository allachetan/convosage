import React, { forwardRef, ReactNode } from 'react';

interface CardButtonProps {
    text: string;
    bg?: string;
    fg?: string;
    className?: string;
    hover?: Boolean
    children?: ReactNode;
    oc?: () => void;
}


const CardButton = forwardRef<HTMLButtonElement, CardButtonProps>(({
    text,
    bg = "bg-black",
    fg = "text-white",
    className = "",
    hover = false,
    children,
    oc
}, ref) => {
    return (
        <button 
            ref={ref} 
            className={`${bg} flex gap-2 items-center justify-center ${fg} p-3 px-6 pr-7 rounded-full ${hover ? "hover:scale-95 " : ""}shadow-md ${className}`} 
            onClick={oc}
        >
            {children}
            <p className="text-nowrap whitespace-nowrap">{text}</p>
        </button>
    );
});

export default CardButton;
