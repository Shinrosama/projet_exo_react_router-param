import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductsPage from "./page/ProductsPage";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />

        {/* ici on crée une url avec un paramètre(:id) afin de pouvoir faire appel a des éléments d'un tableau via leur id */}
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
