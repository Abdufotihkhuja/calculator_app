import { FC } from "react";
import { CalculatorVariant } from "../../../types";

export type RadiusSizeClass =
    | "rounded-[16px]"
    | "rounded-[24px]"
    | "rounded-[12px]"
    | string;
export type FontSizeClass = "text-[32px]" | "text-[21px]" | string;
export type HeightSizeClass = "h-[40px]" | "h-[62px]" | "h-[96px]" | string;
export type WidthSizeClass = "w-[62px]" | "w-[144px]" | string;
export type FontColorClass =
    | "text-fontGrayColor"
    | "text-btnBlue"
    | "text-btnLight"
    | "text-equalBtn"
    | "text-btnLightBlue"
    | "text-lightBlue"
    | string;
export type BtnColorClass =
    | "bg-btnDark"
    | "bg-btnDarkBlue"
    | "bg-btnDarkGray"
    | "bg-equalBtn"
    | string;

export interface BtnProps {
    radius?: number;
    height?: number;
    width?: number;
    bgColor: string;
    fontColor?: string;
    value?: string | number;
    variant: CalculatorVariant;
    src?: string;
    fontSize?: number;
    additionalClasses?: string;
    clickHandler?: (value?: number | string) => void;
}

export const Btn: FC<BtnProps> = ({
    radius,
    height,
    width,
    bgColor,
    fontColor,
    value,
    variant,
    src,
    fontSize,
    additionalClasses,
    clickHandler,
}) => {
    // const radius: number = 16;
    // const height: number = 62;
    // const width: number = 62;
    // const bgColor: string = "btnDark";
    // const fontColor: string = "btnBlue";

    const dynamicFontSize: FontSizeClass = fontSize
        ? `text-[${fontSize}px]`
        : "text-[32px]";

    const dynamicRound: RadiusSizeClass = radius
        ? `rounded-[${radius}px]`
        : "rounded-[16px]";

    const dynamicHeight: HeightSizeClass = height
        ? `h-[${height}px]`
        : "h-[62px]";

    const dynamicWidth: WidthSizeClass = width ? `w-[${width}px]` : "w-[62px]";
    const dynamicColor: BtnColorClass = bgColor
        ? `bg-${bgColor}`
        : "bg-btnDark";

    const dynamicFontColor: FontColorClass = fontColor
        ? `text-${fontColor}`
        : "text-btnBlue";

    const handleFn = (value: number | string) => {
        if (value) {
            clickHandler(value);
        } else {
            clickHandler();
        }
    };

    return (
        <button
            onClick={() => handleFn(value)}
            className={`${additionalClasses} ${dynamicColor} ${dynamicFontSize} ${
                variant === CalculatorVariant.light ? "lightBtns" : ""
            } ${dynamicFontColor} ${dynamicWidth} active:opacity-100 hover:opacity-70 transition-all  ease-in flex justify-center items-center ${dynamicRound} ${dynamicHeight} font-[500]  `}
        >
            {value ? (
                value
            ) : (
                <img src={src} className="fill-lightBlue" alt="btn" />
            )}
        </button>
    );
};
