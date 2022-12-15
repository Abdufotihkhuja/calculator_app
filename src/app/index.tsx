import { FC } from "react";
import { Provider } from "react-redux";
import { CalculatorVariant } from "../shared/types";
import { Calculator } from "../shared/UI/molecules";
import { Background, MainInfo } from "../shared/UI/templates";
import { store } from "../store";

export const App: FC = () => {
    return (
        <Provider store={store}>
            <main className=" w-screen h-screen overflow-hidden font-poppins bg-lightBlue">
                <Background />

                <div className="flex justify-center items-center relative z-10 w-full h-full ">
                    <div className=" w-[90%] w-full mx-[30px] mx-auto my-[200px] flex justify-between items-center ">
                        <MainInfo />

                        <div className="bigCircle mr-[10%] ">
                            <div className="w-[95%] flex justify-between mx-auto">
                                <Calculator variant={CalculatorVariant.light} />

                                <Calculator variant={CalculatorVariant.dark} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Provider>
    );
};
