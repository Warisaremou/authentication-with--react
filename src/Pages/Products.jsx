import React, { useState, useEffect } from "react";
import Items from "../services/items";
import { Link } from "react-router-dom";

function Products() {
  const [allPoducts, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    const productsData = await Items.products();
    setProducts(productsData.data);
  };

  return (
    <div className="pt-7 px-10">
      <h2 className="text-center text-lg font-medium">Products</h2>
      <div className="grid md:grid-cols-3 gap-x-10">
        {allPoducts.map((product) => (
          <div key={product.id} className="product-section">
            <img
              src={`http://localhost:8055/assets/${product.image}?key=large`}
              alt={`${product.name}.jpg`}
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <div>
              <p className="font-medium">Description : </p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/acceuil" className="">Retour</Link>
    </div>
  );
}

export default Products;
