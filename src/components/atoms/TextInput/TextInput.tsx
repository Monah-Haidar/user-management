import {TextInputProps } from "./TextInput.type.ts";

const TextInput = (
    {
        type = 'text',
        placeholder = 'Search users...',
        className = ''
    }: TextInputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={
                'px-4 py-2 rounded-sm border border-gray-300 focus:border-primary focus:ring-primary outline outline-none placeholder-gray-500 placeholder-opacity-100 ' +
                className
            }
        />
    );
};

export default TextInput;