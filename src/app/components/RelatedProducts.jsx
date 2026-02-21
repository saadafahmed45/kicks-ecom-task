"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// Related Products Component
const RelatedProducts = ({ currentId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(res => {
        // Find current product's category name
        let currentCategory = null;
        const currentProduct = res.data.find(p => String(p.id) === String(currentId));
        if (currentProduct && currentProduct.category && currentProduct.category.name) {
          currentCategory = currentProduct.category.name;
        }
        // Filter by same category and exclude current product
        const filtered = res.data.filter(p =>
          String(p.id) !== String(currentId) &&
          p.category && p.category.name === currentCategory
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load related products');
        setLoading(false);
      });
  }, [currentId]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const displayedProducts = products.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  return (
    <section className="w-full mx-auto mt-12 mb-8 px-2 sm:px-4">
      <div className=" ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black">You may also like</h2>
          <div className="flex gap-2">
            <button onClick={handlePrev} className="bg-gray-400 hover:bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition">
              &#8249;
            </button>
            <button onClick={handleNext} className="bg-gray-400 hover:bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition">
              &#8250;
            </button>
          </div>
        </div>
        {loading ? (
          <div className="text-center py-12 text-lg font-semibold text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-lg font-semibold text-red-500">{error}</div>
        ) : displayedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              
              {/* Image Box */}
              <div className="relative bg-[#e7e7e7] rounded-3xl p-5">
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">
                  New
                </span>

                <img
                  src={
                    product.images?.[0] ||
                    "https://via.placeholder.com/300"
                  }
                  alt={product.title}
                  className="w-full h-32 md:h-72 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xs md:text-sm font-extrabold uppercase leading-tight">
                {product.title}
              </h3>

              {/* Button */}
              <Link href={`/product/${product.id}`}
                className="mt-3 bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 rounded-lg w-full flex justify-center gap-2"
              >
                VIEW PRODUCT -
                <span className="text-yellow-400">
                  ${product.price}
                </span>
              </Link>
            </div>
          ))}
        </div>
        ) : (
          <div className="text-center py-12 text-lg font-semibold text-gray-500">No related products found</div>
        )}
      </div>
    </section>
  );
};
export default RelatedProducts;