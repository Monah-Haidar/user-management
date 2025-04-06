import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

const PrimaryButton = (
    {
        className = '',
        children,
    }: Props) => {
    return (
        <>
            <button
                className={
                    `inline-flex items-center rounded-sm border border-transparent bg-white px-4 py-2 text-sm font-semibold text-primary cursor-pointer transition duration-150 ease-in-out hover:bg-blue-400 hover:text-white ` + className
                }
            >
                {children}
            </button>
        </>
    );
};

export default PrimaryButton;