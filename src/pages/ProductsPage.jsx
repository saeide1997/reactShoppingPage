import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import News from "../component/News";
import Products from "../component/Products";


const Product = () => {
    return (
        <div>
            <Navbar/>
            <h2 className="m-4" >لباسهای زنانه</h2>
            <div className="flex justify-between mx-4">
                <div className="flex justify-center" >
                    <h5>فیلتر محصولات:</h5>
                    <select className="mx-2 h-[30px] px-2 border-solid border-1 bg-white border-gray-700">
                        <option value="" disabled selected>نوع</option>
                        <option value="">مجلسی</option>
                        <option value="">راحتی</option>
                        <option value="">ست</option>
                        <option value="">لباس زیر</option>
                        <option value="">لباس خواب</option>
                    </select>
                    <select className="mx-2 h-[30px] px-2 border-solid border-1 bg-white border-gray-700">
                        <option value="" disabled selected>سایز</option>
                        <option value="">small</option>
                        <option value="">medium</option>
                        <option value="">larg</option>
                        <option value="">xlarg </option>
                        <option value="">xxlarge </option>
                    </select>
                </div>
                <div className="flex">
                    <h5>ترتیب محصولات:</h5>
                    <select  className="mx-2 h-[30px] px-2 border-solid border-1 bg-white border-gray-700" name="" id="">
                        <option value="">تازه ترین</option>
                        <option value="">ارزان ترین</option>
                        <option value="">گران ترین</option>
                    </select>
                </div>
            </div>
                <Products/>
                <News/>
                <Footer/>
        </div>
    );
};

export default Product;