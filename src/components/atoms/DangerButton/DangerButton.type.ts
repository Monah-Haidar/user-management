import React from "react";

export interface DangerButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}