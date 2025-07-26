import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6'>🛒 Product Catolog</h1>

      <ProductList />
    </div>
  );
};

export default App;
