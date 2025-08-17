// src/components/ProductList.jsx
import React from "react";

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="mt-10 space-y-6 max-w-5xl w-full">
      <h2 className="text-xl font-bold">All Products</h2>
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded shadow space-y-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-xs text-gray-500">Type: {product.type}</p>
              <p className="text-sm font-medium">₹{product.price}</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                {product.details?.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => onDelete(product)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>

          {/* Image Gallery */}
          {product.images?.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`product-img-${i}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
