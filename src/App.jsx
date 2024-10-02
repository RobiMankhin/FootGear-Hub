import "./App.css";
import Company from "./Components/Company/Company";
import Filter from "./Components/Filter/Filter";
import Header from "./Components/Header/Header";
import ProductDetails from "./Components/Products/ProductDetails";
import Products from "./Components/Products/Products";
import { useState } from "react";

function App() {
  const [isOpen, setIsopen] = useState(false);
  const [opendetail, setOpenDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilters = () => {
    setIsopen(!isOpen);
  };

  const handleDetail = (p) => {
    setSelectedProduct(p);
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {opendetail && selectedProduct && (
        <ProductDetails
          selectedProduct={selectedProduct}
          handleClose={handleCloseDetail}
        />
      )}
      <Header
        handleDetail={handleDetail}
        handleFilters={handleFilters}
        isOpen={isOpen}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Filter isOpen={isOpen} />
      <Company />
      <Products />
    </>
  );
}

export default App;
