import {TextInputProps } from "./TextInput.type.ts";

const TextInput = (
    {
        type = 'text',
        placeholder = '',
        className = '',
        ...rest
    }: TextInputProps) => {
    return (
        <input
            {...rest}
            type={type}
            placeholder={placeholder}
            className={
                'px-4 py-2 rounded-sm border border-gray-300 focus:border-primary focus:ring-primary outline outline-none placeholder-gray-500 placeholder-opacity-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 ' +
                className
            }
        />
    );
};

export default TextInput;