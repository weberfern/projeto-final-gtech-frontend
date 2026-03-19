import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />

        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product" element={<ProductViewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;