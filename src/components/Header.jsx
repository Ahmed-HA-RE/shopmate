import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <header className='bg-white shadow-md p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-blue-600'>ShopMate</h1>
        <div className='relative'>
          <button
            onClick={() => setDropDown(!dropDown)}
            className='cursor-pointer'
          >
            <FaShoppingCart className='text-2xl text-gray-700' />
            {itemCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                {itemCount}
              </span>
            )}
          </button>

          {dropDown && (
            <div className='absolute z-50 right-0 mt-2 w-80 bg-white border rounded p-4 dropdown-menu '>
              <h2 className='font-bold mb-2 underline'>Cart Items:</h2>
              <ul className='divide-y divide-gray-200'>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className=' flex justify-between items-center'
                  >
                    {/* item-content */}
                    <div className='py-2'>
                      <h3 className='font-semibold text-base mb-0.5'>
                        {item.name}
                      </h3>
                      <p className='text-sm text-gray-500'>
                        {item.qty} x ${item.price.toFixed(2)}
                      </p>
                    </div>
                    {/* remove-btn */}
                    <button className='text-red-500 text-sm cursor-pointer'>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className='flex items-center justify-between mt-4 '>
                <h2 className='font-bold'>Total:</h2>
                <p className='font-bold'>${total}</p>
              </div>
              <button className='cursor-pointer mt-4 w-full text-center bg-red-500 hover:bg-red-700 transition duration-200 text-white py-1.5 rounded'>
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
