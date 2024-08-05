

const CategoryItem = ({ item }) => {
    return (
        <div className='flex-1 m-1 h-[70vh] relative'>
            <img className='w-[100%] h-[100%] object-cover ' src={item.img} alt="" />
            <div className='absolute w-[100%] h-[100%] top-0 left-0 flex items-center justify-center flex-col'>
                <h4 className='mb-5'>{item.title}</h4>
                <button className='p-2 bg-white border-1 border-solid border-gray-500 text-gray-900 cursor-pointer'>حالا بخرید!</button>
            </div>
        </div>
    );
};

export default CategoryItem;