import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

const DangerButton = (
    {
        className = '',
        children,
    }: Props
) => {
    return (
        <button
            className={
                `inline-flex items-center rounded-sm border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-red-400 hover:text-white ` + className
            }
        >
            {children}
        </button>
    );
};

export default DangerButton;