import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const title = product.name ?? product.title;
  const thumb = product.image ?? product.images?.[0];
  const price = typeof product.price === "number" ? `${product.price}/-` : product.price;

  const handleClick = () => {
    navigate("/product", { state: product });
  };

  return (
    <div
      className="border rounded-lg overflow-hidden shadow hover:shadow-md transition cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={thumb}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-700">{price}</p>
          <button
            className="mt-2 bg-black text-white text-xs px-4 py-2 rounded hover:bg-gray-800"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from firing
              handleClick();
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
