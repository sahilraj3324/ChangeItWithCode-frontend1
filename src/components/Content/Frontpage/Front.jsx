import React from 'react';

const Front = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-20 items-center">
    {Array.from({ length: 25 }).map((_, index) => (
      <div key={index} class="flex justify-center items-center ">
      <div class="relative cursor-pointer dark:text-white">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg "></span>
          <div
              class="relative p-6 bg-white  border-2 border-indigo-500  rounded-lg hover:scale-105 transition duration-500">
              <div class="flex items-center">
                  <span class="text-xl">😎</span>
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 ">Cool Feature</h3>
              </div>
              <p class="text-gray-600 ">
                  This is the short description of your feature.
              </p>
          </div>
      </div>
  
  </div>
    ))}
  </div>
  );
}

export default Front;
