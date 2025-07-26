import ProductCard from './ProductCard';
import { useProduct } from '../Context/ProductContext';
import Spinner from './Spinner';

const ProductList = () => {
  const { products, loading, error } = useProduct();

  return (
    <>
      {loading && <Spinner />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {error && <p>❌ {error}</p>}

        {!loading && !error && (
          <>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
