import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { value, value1 } from "../../../../store";
import { resolve, resolve1 } from "../../../../store/calculatorSlice";
import { CalculatorVariant } from "../../../types";
import { Btn, Input, OutTitle } from "../../atoms";

interface CalculatorProps {
    variant: CalculatorVariant;
}

// const radius: number = 16;
// const height: number = 62;
// const width: number = 62;
// const bgColor: string = "btnDark";
// const fontColor: string = "btnBlue";

export const Calculator: FC<CalculatorProps> = ({ variant }) => {
    const [calcValue, setCalcValue] = useState<string>("");
    const [calcValue1, setCalcValue1] = useState<string>("");
    const calcResult = useSelector(value);
    const calcResult1 = useSelector(value1);
    const dispatch = useDispatch();

    const clickHandler = (value?: string | number | undefined) => {
        setCalcValue(`${calcValue}${value}`);
    };
    const clickHandler1 = (value1?: string | number | undefined) => {
        setCalcValue1(`${calcValue1}${value1}`);
    };

    const clearValue = () => {
        setCalcValue("");
    };

    const clearValue1 = () => {
        setCalcValue1("");
    };

    const sliceValue = () => {
        setCalcValue(calcValue.slice(0, -1));
    };
    const sliceValue1 = () => {
        setCalcValue1(calcValue1.slice(0, -1));
    };

    const resolveHnd = () => {
        if (calcValue) {
            dispatch(resolve(calcValue));
        }
    };
    const resolveHnd1 = () => {
        if (calcValue1) {
            dispatch(resolve1(calcValue1));
        }
    };

    return (
        <>
            <div
                className={`w-[375px] h-[812px] rounded-[39px] ${variant} px-[33px] py-[40px] ${
                    variant === CalculatorVariant.dark && "mt-[20px]"
                }
        `}
            >
                {variant === CalculatorVariant.dark ? (
                    <div className="flex flex-col gap-y-[20px] h-full justify-end ">
                        <div className="h-full flex flex-col justify-end items-end gap-y-[10px]">
                            <Input value={calcValue} />
                            <OutTitle
                                value={calcResult}
                                variant={CalculatorVariant.dark}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-[16px]">
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    radius={24}
                                    height={40}
                                    value={"e"}
                                    fontSize={21}
                                    bgColor={"btnDark"}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    radius={24}
                                    height={40}
                                    value={"μ"}
                                    fontSize={21}
                                    bgColor={"btnDark"}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    radius={24}
                                    height={40}
                                    value={"sin"}
                                    fontSize={21}
                                    bgColor={"btnDark"}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    radius={24}
                                    height={40}
                                    value={"deg"}
                                    fontSize={21}
                                    bgColor={"btnDark"}
                                />
                            </div>

                            <div className="flex justify-between items-center mb-[22px]">
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={"Ac"}
                                    bgColor={"btnDarkGray"}
                                    fontColor="fontGrayColor"
                                    clickHandler={clearValue}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    src="/public/svg/ri_delete-back-2-line.svg"
                                    bgColor={"btnDarkGray"}
                                    clickHandler={sliceValue}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={"/"}
                                    bgColor={"btnDarkBlue"}
                                    clickHandler={clickHandler}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={"*"}
                                    bgColor={"btnDarkBlue"}
                                    clickHandler={clickHandler}
                                />
                            </div>

                            <div className="flex justify-between items-center mb-[16px]">
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={7}
                                    bgColor={"btnDark"}
                                    clickHandler={clickHandler}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={8}
                                    bgColor={"btnDark"}
                                    clickHandler={clickHandler}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={9}
                                    bgColor={"btnDark"}
                                    clickHandler={clickHandler}
                                />
                                <Btn
                                    variant={CalculatorVariant.dark}
                                    value={"-"}
                                    bgColor={"btnDarkBlue"}
                                    clickHandler={clickHandler}
                                />
                            </div>
                            <div className="flex justify-between items-start gap-x-5">
                                <div className="flex flex-col gap-[16px] w-full">
                                    <div className="flex justify-between items-center ">
                                        <Btn
                                            variant={CalculatorVariant.dark}
                                            value={4}
                                            bgColor={"btnDark"}
                                            clickHandler={clickHandler}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.dark}
                                            value={5}
                                            bgColor={"btnDark"}
                                            clickHandler={clickHandler}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.dark}
                                            value={6}
                                            bgColor={"btnDark"}
                                            clickHandler={clickHandler}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Btn
                                            variant={CalculatorVariant.dark}
                                            value={1}
                                            bgColor={"btnDark"}
                                            clickHandler={clickHandler}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.dark}
                                            value={2}
                                            bgColor={"btnDark"}
                                            clickHandler={clickHandler}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.dark}
                                            value={3}
                                            bgColor={"btnDark"}
                                            clickHandler={clickHandler}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        variant={CalculatorVariant.dark}
                                        value={"+"}
                                        height={96}
                                        bgColor={"btnDarkBlue"}
                                        clickHandler={clickHandler}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-start gap-x-5">
                                <div className="flex justify-between w-full self-end">
                                    <Btn
                                        variant={CalculatorVariant.dark}
                                        value={"0"}
                                        width={144}
                                        clickHandler={clickHandler}
                                        bgColor={"btnDark"}
                                    />
                                    <Btn
                                        variant={CalculatorVariant.dark}
                                        value={"."}
                                        bgColor={"btnDark"}
                                        clickHandler={clickHandler}
                                    />
                                </div>
                                <div>
                                    <Btn
                                        variant={CalculatorVariant.dark}
                                        value={"="}
                                        height={96}
                                        bgColor={"equalBtn"}
                                        fontColor="lightBlue"
                                        clickHandler={resolveHnd}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-y-[20px] h-full justify-end ">
                        <div className="h-full flex flex-col justify-end items-end gap-y-[10px]">
                            <Input value={calcValue1} />

                            <OutTitle
                                value={calcResult1}
                                variant={CalculatorVariant.light}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-[16px]">
                                <Btn
                                    variant={CalculatorVariant.light}
                                    radius={24}
                                    height={40}
                                    value={"e"}
                                    fontSize={21}
                                    bgColor={"btnLight"}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    radius={24}
                                    height={40}
                                    value={"μ"}
                                    fontSize={21}
                                    bgColor={"btnLight"}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    radius={24}
                                    height={40}
                                    value={"sin"}
                                    fontSize={21}
                                    bgColor={"btnLight"}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    radius={24}
                                    height={40}
                                    value={"deg"}
                                    fontSize={21}
                                    bgColor={"btnLight"}
                                />
                            </div>

                            <div className="flex justify-between items-center mb-[22px]">
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={"Ac"}
                                    bgColor={"btnLight"}
                                    clickHandler={clearValue1}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    src="/public/svg/Vector.svg"
                                    bgColor={"btnLight"}
                                    clickHandler={sliceValue1}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={"/"}
                                    bgColor={"btnLight"}
                                    additionalClasses="lightBlueBtn"
                                    clickHandler={clickHandler1}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={"*"}
                                    bgColor={"btnLight"}
                                    additionalClasses="lightBlueBtn"
                                    clickHandler={clickHandler1}
                                />
                            </div>

                            <div className="flex justify-between items-center mb-[16px]">
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={7}
                                    bgColor={"btnLight"}
                                    clickHandler={clickHandler1}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={8}
                                    bgColor={"btnLight"}
                                    clickHandler={clickHandler1}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={9}
                                    bgColor={"btnLight"}
                                    clickHandler={clickHandler1}
                                />
                                <Btn
                                    variant={CalculatorVariant.light}
                                    value={"-"}
                                    bgColor={"btnLight"}
                                    additionalClasses="lightBlueBtn"
                                    clickHandler={clickHandler1}
                                />
                            </div>
                            <div className="flex justify-between items-start gap-x-5">
                                <div className="flex flex-col gap-[16px] w-full">
                                    <div className="flex justify-between items-center ">
                                        <Btn
                                            variant={CalculatorVariant.light}
                                            value={4}
                                            bgColor={"btnLight"}
                                            clickHandler={clickHandler1}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.light}
                                            value={5}
                                            bgColor={"btnLight"}
                                            clickHandler={clickHandler1}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.light}
                                            value={6}
                                            bgColor={"btnLight"}
                                            clickHandler={clickHandler1}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Btn
                                            variant={CalculatorVariant.light}
                                            value={1}
                                            bgColor={"btnLight"}
                                            clickHandler={clickHandler1}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.light}
                                            value={2}
                                            bgColor={"btnLight"}
                                            clickHandler={clickHandler1}
                                        />
                                        <Btn
                                            variant={CalculatorVariant.light}
                                            value={3}
                                            bgColor={"btnLight"}
                                            clickHandler={clickHandler1}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        variant={CalculatorVariant.light}
                                        value={"+"}
                                        height={96}
                                        bgColor={"btnLight"}
                                        additionalClasses="lightBlueBtn"
                                        clickHandler={clickHandler1}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-start gap-x-5">
                                <div className="flex justify-between w-full self-end">
                                    <Btn
                                        variant={CalculatorVariant.light}
                                        value={"0"}
                                        width={144}
                                        bgColor={"btnLight"}
                                        clickHandler={clickHandler1}
                                    />
                                    <Btn
                                        variant={CalculatorVariant.light}
                                        value={"."}
                                        bgColor={"btnLight"}
                                        clickHandler={clickHandler1}
                                    />
                                </div>
                                <div>
                                    <Btn
                                        variant={CalculatorVariant.light}
                                        value={"="}
                                        height={96}
                                        bgColor={"btnLight"}
                                        additionalClasses="lightEqualBtn"
                                        clickHandler={resolveHnd1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
