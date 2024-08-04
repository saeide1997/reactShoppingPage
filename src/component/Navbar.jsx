import React from 'react';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';


const Navbar = () => {
    return (
        <div className='h-[60px]'>
            <div className='p-7 flex justify-between items-center'>
                <div className='flex-1 flex'>
                    <div className='cursor-pointer ml-10 text-[14px]'>
                        فارسی
                    </div>
                    <div className=' border-2 border-solid border-gray-400 ml-3 p-1'>
                        <Search/>
                        <input className='border-none' type="text" />
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