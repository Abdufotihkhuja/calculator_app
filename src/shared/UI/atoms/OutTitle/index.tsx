import { FC } from "react";
import { CalculatorVariant } from "../../../types";
export interface OutTitleProps {
    value: number | null;
    variant: CalculatorVariant;
}
export const OutTitle: FC<OutTitleProps> = ({ value, variant }) => {
    return (
        <h1
            className={`${
                variant === CalculatorVariant.dark
                    ? "text-outputDarkColor"
                    : "text-outputLightColor"
            } leading-[150%] text-[48px] text-right `}
        >
            {value
                ? `=${value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
                : `0`}
        </h1>
    );
};
