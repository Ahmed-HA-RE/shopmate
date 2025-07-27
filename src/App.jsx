import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100'>
        <div className=' container mx-auto  p-6'>
          <h1 className='text-3xl font-bold mb-6'>🛒 Product Catalog</h1>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default App;
