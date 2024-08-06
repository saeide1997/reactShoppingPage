import { Add, Remove } from "@mui/icons-material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


const CartPage = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5">
                <h1 className="font-[300] text-center"></h1>
                <div className="flex items-center p-5 justify-between">
                    <button className="p-2 font-[600] cursor-pointer w-[150px] border-2 border-gray-800 border-solid"> ویرایش سبدخرید</button>
                    <div className="">
                        <span className="cursor-pointer underline ml-5">سبد خرید(۲)</span>
                        <span className="cursor-pointer underline">لیست محبوب(۰)</span>
                    </div>
                    <button className="p-2 font-[600] cursor-pointer w-[150px] bg-pink-500 text-white">تسویه</button>
                </div>
                <div className=" flex justify-between">
                    <div className="" style={{flex:"3"}}>
                        <div className="flex justify-between">
                            <div className="flex-2 flex">
                                <img className="w-[200px] h-[200px]" src="https://img.freepik.com/premium-photo/white-cat-with-pink-nose-pink-nose_962508-11856.jpg" alt="" />
                                <div className="p-5 flex flex-col justify-between">
                                    <div className="N"><b>محصول: </b> پیشی بالا</div>
                                    <div className="I"><b>کد: </b>2145698</div>
                                    <div className="w-[20px] h-[20px] rounded-full bg-pink-600"></div>
                                    <div className="S"><b>سایز: </b>کوچولو</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center flex-col ">
                                <div className="flex items-center">
                                    <Add/>
                                    <div className="text-center text-[24px]">2</div>
                                    <Remove/>
                                </div>
                                <div className="mt-5 text-[24px] ">300000000 ریال</div>
                            </div>
                        </div>
                    <hr className="text-pink-600 h-1 bg-pink-600"/>
                    <div className="flex justify-between">
                            <div className="flex-2 flex">
                                <img className="w-[200px] h-[200px]" src="https://img.freepik.com/premium-photo/hd-wallpaper-featuring-adorable-white-cat_789916-2287.jpg" alt="" />
                                <div className="p-5 flex flex-col justify-around">
                                    <div className="N"><b>محصول: </b> پیشی بالا</div>
                                    <div className="I"><b>کد: </b>2145698</div>
                                    <div className="w-[20px] h-[20px] rounded-full bg-pink-400"></div>
                                    <div className="S"><b>سایز: </b>کوچولو</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center flex-col ">
                                <div className="flex items-center">
                                    <Add/>
                                    <div className="text-center text-[24px]">2</div>
                                    <Remove/>
                                </div>
                                <div className="mt-5 text-[24px] ">80000000 ریال</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" border-1 border-solid justify-center items-center mr-5 border-pink-400/50 rounded-lg p-5 h-[50vh]" style={{flex:"1"}}>
                        <h1 className="font-[200]">خلاصه سفارشات</h1>
                        <div className="my-7 mx-0 justify-between flex">
                            <span className="">پیشی بالا</span>
                            <span className="">500000 ریال</span>
                        </div>
                        <div className="my-7 mx-0 justify-between flex">
                            <span className="">پیشی بالا</span>
                            <span className="">800000 ریال</span>
                        </div>
                        <div className="my-7 mx-0 justify-between flex font-[600]">
                            <span className=""> مجموع</span>
                            <span className="">1300000 ریال</span>
                        </div>
                        <button className="p-2 w-100 font-[600] items-center justify-center cursor-pointer bg-pink-500 text-white"> تسویه</button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default CartPage;