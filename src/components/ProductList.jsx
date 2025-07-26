const ProductList = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {products.map((product) => (
        <div className='bg-white rounded-lg shadow p-4 flex flex-col'>
          <img
            className='h-40 object-cover rounded mb-4'
            src={product.image}
            alt={product.name}
          />
          <h2 className='text-xl font-semibold'>{product.name}</h2>
          <p className='text-gray-500 text-sm mb-3'>{product.description}</p>
          <h3 className='text-xl font-bold mb-4'>${product.price}</h3>
          <button className='capitalize cursor-pointer w-full bg-blue-600 text-white p-3 rounded'>
            add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
