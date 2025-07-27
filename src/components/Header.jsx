import { useCart } from '../Context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className='bg-white shadow-md p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-blue-600'>ShopMate</h1>
        <div className='relative cursor-pointer'>
          <FaShoppingCart className='text-2xl text-gray-700' />
          {itemCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
