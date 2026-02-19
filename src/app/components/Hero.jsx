import React from 'react';

const Hero = () => {
  return (
    <div className=" py-8 sm:py-12 lg:py-16">
      <div className="mx-auto ma px-4 sm:px-8 lg:px-12">
        {/* Main Heading */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-[223.5px] uppercase text-center font-black tracking-tight">
            <span className="text-black ">DO IT</span>
            <span className="text-blue-600 ml-2 md:ml-10">RIGHT</span>
          </h1>
        </div>
        {/* Hero Content Container */}
        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Product Image with Overlay and Badge */}
          <div className="relative flex-1 min-w-0">
            <div className="relative rounded-[48px] overflow-hidden border border-blue-200" style={{aspectRatio: '1320/750'}}>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1320&h=750&fit=crop"
                alt="Nike Air Max"
                className="w-full h-full object-cover"
              />
              {/* Vertical Badge */}
              <div className="absolute left-0 top-8 bg-black text-white text-xs font-bold px-2 py-2 rounded-r-xl" style={{writingMode: 'vertical-rl', letterSpacing: '0.05em'}}>
                Nike product of the year
              </div>
              {/* Overlay Info */}
              <div className="absolute left-0 bottom-0 w-full p-6 pb-8 bg-linear-to-t from-black/80 via-black/40 to-transparent rounded-b-[48px]">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-white">NIKE AIR MAX</h2>
                <p className="text-base sm:text-lg text-white mb-4">Nike introducing the new air max for everyone's comfort</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-lg text-sm">SHOP NOW</button>
              </div>
              {/* Thumbnails (Desktop) */}
              <div className="hidden lg:flex flex-col gap-4 absolute right-6 bottom-6">
                <div className="rounded-2xl border-2 border-white overflow-hidden w-32 h-20 bg-white/40 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=320&h=200&fit=crop"
                    alt="Product thumbnail 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl border-2 border-white overflow-hidden w-32 h-20 bg-white/40 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=320&h=200&fit=crop&sat=50"
                    alt="Product thumbnail 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Thumbnails (Mobile) */}
        <div className="flex lg:hidden gap-4 mt-6 justify-center">
          <div className="rounded-2xl border-2 border-white overflow-hidden w-20 h-14 bg-white/40 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=90&fit=crop"
              alt="Product thumbnail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl border-2 border-white overflow-hidden w-20 h-14 bg-white/40 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=90&fit=crop&sat=50"
              alt="Product thumbnail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;