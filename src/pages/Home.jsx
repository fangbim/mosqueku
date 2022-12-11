import React from "react"

function Home() {
  return (
    <div className="">
      <div className="py-20 px-16 sm:px-32 sm:py-36 z-1 absolute">
      <h3 className="text-red-400 font-bold text-sm sm:text-lg">
        SEMUA MUSLIM BERKEWAJIBAN MENGURUS MASJID
      </h3>
    
      <h1 className="text-3xl py-1 md:text-7xl sm:py-3 font-serif font-bold text-blue-900">MOSQUE-Ku,</h1>
      <h1 className="text-3xl py-1 md:text-7xl sm:py-3 font-serif font-bold text-blue-900">Solusi Digital</h1>
      <h1 className="text-3xl py-1 md:text-7xl sm:py-3 font-serif font-bold text-blue-900">Umat Islam</h1>
      </div>
      
      <div className="z-0 bg-gradient-to-t from-white">
      <img className="z-0 h-full w-full object-cover" src="./images/mosque.jpg" alt="" />
      </div>
      
    </div>
  );
}

export default Home;
