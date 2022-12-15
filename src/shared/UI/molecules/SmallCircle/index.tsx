import { FC } from "react";

interface ISmallCircleProps {
    additionalClass?: string;
    src: string;
}

export const SmallCircle: FC<ISmallCircleProps> = ({
    additionalClass,
    src,
}) => {
    return (
        <div className={`absolute ${additionalClass ? additionalClass : ""}`}>
            <img src={src} alt="image" className="relative" />
        </div>
    );
};
