import React from 'react';
import Navbar from '../component/Navbar';
import News from '../component/News';
import Footer from '../component/Footer';
import { Add, Remove } from '@mui/icons-material';

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <div className='p-10 flex'>
                <div className='flex-1'>
                    <img className='w-[100%] h-[90vh] object-cover' src="https://play-lh.googleusercontent.com/phUhJzNvyZTpbUhQmN3oaj0bHL0pQ_tOeBLjlF_l9z8qK7zogZbYO0ttd3jTGTHdAQ" alt="" />
                </div>
                <div className='flex-1 px-10 mt-10'>
                    <h1 className=' font-[100]'>پیشی ملوس سفید</h1>
                    <p className='my-5'>توضیحات</p>
                    <span className='text-[40px] font-[100]'>5000ریال</span>
                    <div className='flex w-[80%] justify-between my-5 items-center'>
                        <h5>رنگ:</h5>
                        <div className='cursor-pointer w-[30px] h-[30px] rounded-full bg-black border-1 border-black'></div>
                        <div className='cursor-pointer w-[30px] h-[30px] rounded-full bg-white border-1 border-black'></div>
                        <div className='cursor-pointer w-[30px] h-[30px] rounded-full bg-yellow-600 border-1 border-black'></div>
                        <div className='cursor-pointer w-[30px] h-[30px] rounded-full bg-slate-600 border-1 border-black'></div>
                        <h5>اندازه:</h5>
                        <select className="mx-2 h-[30px] px-2 bg-white border-solid border-1 border-gray-700" >
                            <option value="">کوچک</option>
                            <option value="">متوسط</option>
                            <option value="">بزرگ</option>
                        </select>
                    </div>
                    <div className='flex items-center w-[50%] justify-between'>
                        <div className='flex items-center font-[700]'>
                            <Remove />
                            <span className='w-[30px] h-[30px] mx-2 flex border-1 border-solid border-teal-600 justify-center items-center'>1</span>
                            <Add />
                        </div>
                        <button className='p-2 border-1 border-solid border-gray-700 cursor-pointer font-[500]'>افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
            <News />
            <Footer />
        </div>
    );
};

export default ProductPage;