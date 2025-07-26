import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import axios from 'axios';
const API_URL = import.meta.env.VITE_PRODUCTS_API_URL;

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get(API_URL);
        setProducts(data);
      } catch (error) {
        const status = error.response ? error.response.status : null;

        switch (status) {
          case 404:
            return setError(error.message);
          case 500:
            return setError(error.message);
          default:
            return setError('Not Found');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6'>🛒 Product Catolog</h1>

      {loading && <p>Loading...</p>}
      {error && <p>❌ {error}</p>}

      <ProductList products={products} />
    </div>
  );
};

export default App;
