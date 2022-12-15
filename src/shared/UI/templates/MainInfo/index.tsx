import { FC } from "react";

export const MainInfo: FC = () => {
    return (
        <div className="flex flex-col gap-y-[70px] max-w-[512px]">
            <div className=" flex justify-start items-center gap-x-[24px]">
                <img
                    src="/public/svg/logo.svg"
                    alt="Logo"
                    className="w-[88px]"
                />

                <div className="flex gap-x-[24px] items-center">
                    <h1 className=" text-[#ffff] font-[900] text-[40px] leading-[190%] tracking-[0.05rem] uppercase">
                        BIG SUR
                    </h1>
                    <h2 className="bg-boldBlue px-5 py-4 rounded-[40px] text-[#ffff] font-[700] text-[32px] ">
                        V1.0
                    </h2>
                </div>
            </div>
            <div>
                <p className="block mb-[24px] max-w-[233px] px-5 py-[10px] bg-mediumBlue rounded-[40px] uppercase text-[#ffffff] text-[24px] leading-[133%] font-[700]">
                    DESIGN FREEBIE
                </p>
                <h1 className="w-full text-[52px] font-[700] text-[#303136] leading-[121%] tracking-[-1px]">
                    Freebie: Calculator App User Interface Design.🚀
                </h1>
            </div>
        </div>
    );
};
