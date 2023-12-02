import { useState } from "react";
import Products from "./components/Products";
import { products } from "./data/products";

function App() {
  
  const [filters, setFilters] = useState({
    category: "Hogar",
    minPrice: 2
  })

  const filterProducts = (products) => {
    return products.filter( product => {
      return(
        product.price >= filters.minPrice && (
          filters.category == "all" ||
          product.category == filters.category
        )
      )
    })
  }

  const filteredProduct = filterProducts(products)

  return (
    <>
      <h1>REACT SHOPPING</h1>
      <Products products={filteredProduct} />
    </>
  );
}

export default App;
