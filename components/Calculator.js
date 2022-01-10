import { AiOutlineClose } from "react-icons/ai";

export const Calculator = () => {
  return (
    <div className="popup fixed min-h-screen hidden">
      <div className="flex fixed inset-0 z-40 bg-gray-400 bg-opacity-50">
        <div className="m-auto bg-white p-5 rounded-xl drop-shadow-md">
          <div className="grid justify-items-end">
            <button className="popup-close text-xl">
              <AiOutlineClose />
            </button>
          </div>
          <h2 className="text-gray-700 text-3xl font-bold my-2">
            Plan calculator:
          </h2>
          <form id="calculator">
            <label className="block text-sm font-medium text-gray-700">
              Plans:
            </label>
            <select
              className="py-2 w-full px-3 border rounded-md mr-3"
              id="plan"
            >
              <option value="30">30 Minutes plan</option>
              <option value="60">60 Minutes plan</option>
              <option value="120">120 Minutes plan</option>
            </select>
            <label className="block text-sm font-medium text-gray-700">
              DDD origin:
            </label>
            <select
              className="py-2 w-full px-3 border rounded-md mr-3"
              id="origin"
            >
              <option value="11">011</option>
              <option value="16">016</option>
              <option value="17">017</option>
              <option value="18">018</option>
            </select>
            <label className="block text-sm font-medium text-gray-700">
              DDD destination:
            </label>
            <select
              className="py-2 w-full px-3 border rounded-md mr-3"
              id="destiny"
            >
              <option value="11">011</option>
              <option value="16">016</option>
              <option value="17">017</option>
              <option value="18">018</option>
            </select>
            <label className="block text-sm font-medium text-gray-700">
              Minutes:
            </label>
            <input
              className="border w-full rounded-md py-2 px-3"
              id="minute"
            ></input>
            <button
              id="btn-calculators"
              className="bg-gray-900 rounded-md py-2 px-2 text-white my-3 font-bold text-md"
              type="submit"
            >
              Calculate
            </button>
          </form>
          <div
            id="result-calculator"
            className="container flex justify-center mx-auto hidden"
          >
            <div className="flex flex-col">
              <div className="w-full">
                <div>
                  <table>
                    <thead className="bg-gray-900 text-white text-xs px-6 py-4">
                      <tr>
                        <th className="p-2">Origin</th>
                        <th className="p-2">Destination</th>
                        <th className="p-2">Time</th>
                        <th className="p-2">Plan</th>
                        <th className="p-2">With our new plans</th>
                        <th className="p-2">Without our new plans</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <span id="originResult" />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <span id="destinyResult" />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <span id="minuteResult" />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <span id="planResult" /> Minutes plan
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <span id="result" />
                        </td>
                        <td className="px-6 py-4 text-md text-gray-500 text-center">
                          <span id="without" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
