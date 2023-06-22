import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full px-20 bg-slate-900">
      <div className="flex justify-start w-full py-10 border-b border-gray-500">
        <div className="flex flex-col flex-1 justify-start items-start">
          <h1 className="text-5xl font-bold text-white">Vite Store</h1>
          <p className="text-md font-medium text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            quisquam ducimus repellendus eos ipsa eius placeat quidem
            cupiditate, iusto nihil.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-4">
          <div className="flex justify-start items-center">
            <h1 className="text-lg font-semibold text-gray-500">
              Our Social Media
            </h1>
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <img src="/images/facebook.png" alt="logo" className="w-10 h-10" />
            <img src="/images/instagram.png" alt="logo" className="w-10 h-10" />
            <img
              src="/images/twitter-sign.png"
              alt="logo"
              className="w-10 h-10"
            />
            <img
              src="/images/github-sign.png"
              alt="logo"
              className="w-10 h-10"
            />
            <img src="/images/linkedin.png" alt="logo" className="w-10 h-10" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full px-10 py-20 border-b border-gray-500">
        <div className="flex flex-col justify-center items-center w-1/4">
          <h1 className="text-xl font-bold text-white border-b border-gray-200">
            Top Fashion
          </h1>
          <ul className="text-gray-500 font-bold">
            <li>Mens Fashion</li>
            <li>Accessories</li>
            <li>Fashion Brand</li>
            <li>Girls Fashion</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4">
          <h1 className="text-xl font-bold text-white border-b border-gray-200">
            Top Fashion
          </h1>
          <ul className="text-gray-500 font-bold">
            <li>Mens Fashion</li>
            <li>Accessories</li>
            <li>Fashion Brand</li>
            <li>Girls Fashion</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4">
          <h1 className="text-xl font-bold text-white border-b border-gray-200">
            Top Fashion
          </h1>
          <ul className="text-gray-500 font-bold">
            <li>Mens Fashion</li>
            <li>Accessories</li>
            <li>Fashion Brand</li>
            <li>Girls Fashion</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-1/4">
          <h1 className="text-xl font-bold text-white border-b border-gray-200">
            Top Fashion
          </h1>
          <ul className="text-gray-500 font-bold">
            <li>Mens Fashion</li>
            <li>Accessories</li>
            <li>Fashion Brand</li>
            <li>Girls Fashion</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-start w-full py-6 space-y-2">
          <h1 className="text-lg font-medium text-gray-500">
            © Copyright ViteStore. All Rights Reserved
          </h1>
          <p className="text-sm font-semibold text-gray-200 w-1/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            deserunt illum sunt veniam incidunt necessitatibus ad praesentium
            distinctio, aut rerum.
          </p>
        </div>
      </div>
    </div>
  );
}