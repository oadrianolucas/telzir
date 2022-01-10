import { BsSim } from "react-icons/bs";

export const Deals = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img className="min-w-full h-full" src="/stefan-phone.jpg" />
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-xl p-4 pl-0">
            Learn how everyone gets
          </p>
          <h3 className="text-4xl font-thin text-left">
            <BsSim className="text-gray-800" />
            Lowest price with the best performance
          </h3>
          <p className="text-gray-600 text-sm p-4 pl-0">
            Learn how everyone gets plans starting at only $29.99/month.
            <br></br>
          </p>
          <button
            className="bg-gray-900 p-2 pl-6 pr-6 rounded-md
            font-semibold text-white mr-3 hover:bg-gray-700"
          >
            <a href="#cards">Check it out</a>
          </button>
        </div>
      </div>
    </div>
  );
};
