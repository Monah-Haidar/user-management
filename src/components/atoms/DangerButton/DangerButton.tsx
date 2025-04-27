import {DangerButtonProps} from "./DangerButton.type.ts";


const DangerButton = (
    {
        className = '',
        children,
        onClick
    }: DangerButtonProps
) => {
    return (
        <button
            onClick={onClick}
            className={
                `inline-flex items-center rounded-sm border border-transparent bg-red-600 px-3 py-1 text-xs font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-red-400 hover:text-white ` + className
            }
        >
            {children}
        </button>
    );
};

export default DangerButton;