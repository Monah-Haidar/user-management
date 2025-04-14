import { PrimaryButtonProps } from './PrimaryButton.type.ts';

const PrimaryButton = (
    {
        className = '',
        children,
        ...rest
    }: PrimaryButtonProps) => {
    return (
        <>
            <button
                {...rest}
                className={
                    `inline-flex items-center rounded-sm border border-transparent bg-primary px-3 py-1 text-xs font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-blue-400 ` + className
                }
            >
                {children}
            </button>
        </>
    );
};

export default PrimaryButton;