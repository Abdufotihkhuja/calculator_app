import { FC } from "react";
import { SmallCircle } from "../../molecules";

export const Background: FC = () => {
    return (
        <>
            <SmallCircle
                src="/public/svg/calc.svg"
                additionalClass={"bgObject"}
            />
            <SmallCircle
                src="/public/svg/calc1.svg"
                additionalClass={"bgObject1"}
            />

            <SmallCircle
                src="/public/svg/btn.svg"
                additionalClass={"bgObject2"}
            />
            <SmallCircle
                src="/public/svg/btn1.svg"
                additionalClass={"bgObject3"}
            />

            <SmallCircle
                src="/public/svg/circle.svg"
                additionalClass={"bgObject4"}
            />
            <SmallCircle
                src="/public/svg/circle.svg"
                additionalClass={"bgObject5"}
            />
        </>
    );
};
