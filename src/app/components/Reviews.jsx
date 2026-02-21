"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      title: "Good Quality",
      desc: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },
    {
      id: 2,
      title: "Good Quality",
      desc: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    },
    {
      id: 3,
      title: "Good Quality",
      desc: "I highly recommend shopping from kicks",
      rating: 5.0,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
  ];

  const Card = ({ review }) => (
    <div className="bg-white rounded-2xl rounded-br-[25px] md:rounded-br-none shadow-md overflow-hidden">
      <div className="p-5 relative">
        <h3 className="text-lg font-semibold">{review.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{review.desc}</p>

        <div className="flex items-center mt-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-orange-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-2">
            {review.rating}
          </span>
        </div>

        <img
          src={review.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full absolute top-5 right-5 border-2 border-white shadow"
        />
      </div>

      <div className="h-64 md:h-80">
        <img
          src={`${review.image}?auto=format&fit=crop&w=800&q=80`}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="py-12 px-4 md:px-12 mb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <h2 className="text-3xl sm:text-6xl font-extrabold uppercase">
          Reviews
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold px-5 py-3 rounded-lg w-fit">
          See All
        </button>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Card review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;