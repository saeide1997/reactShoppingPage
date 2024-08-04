import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

const Slider = () => {

    // const wraper = styled.div`
    //     height : 100%;
    //     display : flex;
    //     transition : all 1.5s e;
    //     transform : translateX(${(props)=>props.slideIndex * -100}vW)
    // `;


    return (
        <div className="w-[97%] h-[100vh] flex relative truncate m-10">
            <div className="cursor-pointer w-[50px] h-[50px] bg-purple-100 rounded-full flex justify-center items-center absolute top-0 bottom-0 m-auto left-5">
                <ArrowLeftOutlined />
            </div>
            <div className="h-[100%] flex">
                <div className="flex items-center w-[100vw] h-[100vh]">
                    <div className="flex-1 h-[100%]">
                        <img className='h-[80%]' src="https://assistanteplus.fr/wp-content/uploads/2022/04/chat-midjourney.webp" alt="" />
                    </div>
                    <div className="flex-1 p-20">
                        <h1 className="text-[70px]">فروش تابستانه</h1>
                        <p className="my-12 mx-0 text-[20px]">فرصت استثنایی برای خرید با تخفیف!</p>
                        <button className="border-solid border-1 p-3 text-[20px] cursor-pointer bg-transparent">الان ثبت کنید...</button>
                    </div>
                </div>
                <div className="flex items-center w-[100vw] h-[100vh]">
                    <div className="flex-1 h-[100%]">
                        <img className='h-[80%]' src="https://assistanteplus.fr/wp-content/uploads/2022/04/chat-midjourney.webp" alt="" />
                    </div>
                    <div className="flex-1 p-20">
                        <h1 className="text-[70px]">فروش زمستانه</h1>
                        <p className="my-12 mx-0 text-[20px]">فرصت استثنایی برای خرید با تخفیف!</p>
                        <button className="border-solid border-1 p-3 text-[20px] cursor-pointer bg-transparent">الان ثبت کنید...</button>
                    </div>
                </div>
            </div>
            <div  className="cursor-pointer w-[50px] h-[50px] bg-purple-100 rounded-full flex justify-center items-center absolute top-0 bottom-0 m-auto right-5">
                <ArrowRightOutlined />
            </div>
        </div>
    );
};

export default Slider;