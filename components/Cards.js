import { BsSim } from "react-icons/bs";

export const Cards = () => {
  return (
    <div className="bg-gray-50 py-16">
      <h4 className="text-center font-thin text-gray-600 text-xl">
        Ready to get started?
      </h4>
      <div className="grid lg:grid-cols-3 px-4">
        <div className="drop-shadow-md bg-white rounded-xl m-4 p-6">
          <BsSim className="text-white bg-gray-800 text-5xl p-2 rounded" />
          <h2 className="font-bold text-3xl text-gray-800">30 Minutes plan</h2>
          <span className="font-thin text-gray-500">
            30 minutes calls everyday for free!
          </span>
          <h3 className="text-4xl font-thin text-gray-800">
            <span className="font-thin text-sm">Price:</span>$30.00
            <span className="font-thin text-sm">/mo.</span>
          </h3>
          <hr className="my-3"></hr>
          <button
            className="w-100 bg-gray-900 rounded text-white
            font-bold p-2 px-6 mt-2 mr-2 border border-gray-900 hover:bg-gray-600 hover:border-gray-600"
          >
            Shop now!
          </button>
          <button
            className="w-100 bg-white border border-gray-900 rounded text-gray-900
            font-bold p-2 px-6 mt-2 hover:bg-gray-900 hover:text-white"
          >
            <a href="#compare">Compare</a>
          </button>
        </div>
        <div className="drop-shadow-md bg-gray-800 rounded-xl m-4 p-6">
          <BsSim className="text-gray-900 bg-white text-5xl p-2 rounded" />
          <h2 className="font-bold text-3xl text-white">60 Minutes plan</h2>
          <span className="font-thin text-white">
            60 minutes calls everyday for free!
          </span>
          <h3 className="text-4xl font-thin text-white">
            <span className="font-thin text-sm">Price:</span>$60.00
            <span className="font-thin text-sm">/mo.</span>
          </h3>
          <hr className="my-3"></hr>
          <button
            className="w-100 bg-gray-600 rounded text-white
            font-bold p-2 px-6 mt-2 mr-2 border border-gray-600 hover:bg-gray-500"
          >
            Shop now!
          </button>
          <button
            className="w-100 bg-white border border-gray-900 rounded text-gray-900
            font-bold p-2 px-6 mt-2 hover:bg-gray-800 hover:text-white hover:border-white"
          >
            <a href="#compare">Compare</a>
          </button>
        </div>
        <div className="drop-shadow-md bg-white rounded-xl m-4 p-6">
          <BsSim className="text-white bg-gray-800 text-5xl p-2 rounded" />
          <h2 className="font-bold text-3xl text-gray-800">120 Minutes plan</h2>
          <span className="font-thin text-gray-500">
            120 minutes calls everyday for free!
          </span>
          <h3 className="text-4xl font-thin text-gray-800">
            <span className="font-thin text-sm">Price:</span>$120.00
            <span className="font-thin text-sm">/mo.</span>
          </h3>
          <hr className="my-3"></hr>
          <button
            className="w-100 bg-gray-900 rounded text-white
            font-bold p-2 px-6 mt-2 mr-2 border border-gray-900 hover:bg-gray-600 hover:border-gray-600"
          >
            Shop now!
          </button>
          <button
            className="w-100 bg-white border border-gray-900 rounded text-gray-900
            font-bold p-2 px-6 mt-2 hover:bg-gray-900 hover:text-white"
          >
            <a href="#compare">Compare</a>
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="font-thin text-gray-600 text-center text-md px-5">
          With any Telzir's plans you can make free calls up to the time
          stipulated by the plan. Excess minutes have a 10% surcharge on the
          normal minute rate.
        </p>
      </div>
    </div>
  );
};
