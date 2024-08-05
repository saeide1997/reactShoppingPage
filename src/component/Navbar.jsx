import React from 'react';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';


const Navbar = () => {
    return (
        <div className='h-[80px] bg-slate-200'>
            <div className='p-7 flex justify-between items-center'>
                <div className='flex-1 flex'>
                    <div className='cursor-pointer justify-center items-center ml-10 text-[14px]'>
                        فارسی
                    </div>
                    <div className=' border-1 h-[25px] border-solid justify-center items-center border-gray-400 ml-3  p-0'>
                        <Search/>
                        <input className='border-none h-[20px] relative top-[-3px] bg-slate-200' type="text" />
                    </div>
                </div>
                <div className='flex-1 text-center'>.SOHO</div>
                <div className='flex-1 flex justify-end'>
                    <div className='mx-3 cursor-pointer'>ثبت نام</div>
                    <div className='mx-3 cursor-pointer'>ورود</div>
                    <div className='mx-3 cursor-pointer'>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;