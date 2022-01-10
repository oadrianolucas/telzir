import { BsTelephoneForward } from "react-icons/bs";

export const Compare = () => {
  return (
    <div className="mx-auto">
      <div className="flex">
        <div className="mx-auto w-80"></div>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 lg:px-10">
            <p className="text-gray-600 text-xl p-4 pl-0">Got questions?</p>
            <h3 className="text-4xl font-thin text-left">
              <BsTelephoneForward className="text-gray-800" />
              Compare your SIM card with and without our plans
            </h3>
            <p className="font-thin text-gray-600 text-sm p-4 pl-0">
              Take this opportunity
            </p>
            <button
              className="popup-button bg-gray-900 py-2 px-6
              rounded-md font-semibold text-white mr-3
              hover:bg-gray-600"
            >
              Compare now
            </button>
          </div>
          <div className="">
            <img className="min-w-full h-full" src="/phone-md.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
