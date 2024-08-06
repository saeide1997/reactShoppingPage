
const LoginPage = () => {
    return (

        <div className="w-[100vw] h-[100vh] bg-pink-300/50 flex items-center justify-center">
            <div className="p-5 w-[25%]  bg-white">
                <h1 className="text-[24px]  text-center">به SOHO خوش آمدید.</h1>
                <form className="items-center flex flex-col justify-center" action="">
                    <input className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600" type="text" name="" id="" placeholder="نام کاربری" />
                    <input className="flex-1 min-w-[40%] mt-4 ml-4 p-2 border-1 border-pink-600" type="password" name="" id="" placeholder="رمز" />
                    <button className="border-1 border-pink-600 px-5 py-2 mt-5 justify-center items-center  hover:bg-pink-100">ورود </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;