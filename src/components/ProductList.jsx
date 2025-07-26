import ProductCard from './ProductCard';
import { useProduct } from '../Context/ProductContext';

const ProductList = () => {
  const { products, loading, error } = useProduct();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {loading && <p>Loading...</p>}
      {error && <p>❌ {error}</p>}

      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
