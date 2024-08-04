
import { popularProducts } from '../data';
import Product from './Product';

const Products = () => {
    return (
        <div className='flex p-5 flex-wrap justify-between'>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
};

export default Products;