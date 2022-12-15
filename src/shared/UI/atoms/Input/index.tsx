import { FC } from "react";

export interface InputProps {
    value: string;
}

export const Input: FC<InputProps> = ({ value }) => {
    return (
        <span className="text-inputFontColor  text-[24px]">
            {value ? value : "Please enter value"}
        </span>
    );
};
