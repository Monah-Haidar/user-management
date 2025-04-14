import React from "react";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    className?: string;
}