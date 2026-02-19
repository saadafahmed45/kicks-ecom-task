"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewDrop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(res => {
        setProducts(res.data.slice(0, 8)); // Show only first 8 products for layout
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  return (
    <section className=" mx-auto px-4 sm:px-8 lg:px-12 py-8 mt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
          DON’T MISS OUT<br />NEW DROPS
        </h2>
        <button className="self-start md:self-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg text-sm mt-2 md:mt-0">
          SHOP NEW DROPS
        </button>
      </div>
      {loading ? (
        <div className="text-center py-12 text-lg font-semibold text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center py-12 text-lg font-semibold text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border-4 border-gray-100 shadow-sm flex flex-col p-4 relative transition hover:shadow-lg">
              {/* New badge */}
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg">New</span>
              <img
                src={product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={product.title}
                className="w-full h-80 object-contain mb-4"
              />
              <div className="flex-1 flex flex-col">
                <h3 className="text-base font-extrabold text-black mb-2 leading-tight">
                  {product.title}
                </h3>
                <div className="mt-auto">
                  <button className="w-full bg-black text-white text-xs font-bold py-2 rounded-b-xl flex justify-center gap-4 items-center px-4">
                    <span>VIEW PRODUCT</span>
                    <span className="text-yellow-400">${product.price}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NewDrop;