export const Panels = () => {
  return (
    <div className="mt-4 h-48">
      <div className="container mx-auto text-center">
        <h2 className="text-md font-thin text-gray-200">Welcome to Telzir</h2>
        <h1 className="text-white font-bold text-4xl">
          There's a plan for everyone!
        </h1>
        <div className="mt-6">
          <button
            className="bg-white p-2 px-6 rounded-md
            font-semibold text-gray-800 mr-3 border hover:border-white
            hover:bg-gray-800 hover:text-white hover:border-white"
          >
            <a href="#cards">Choose a plan</a>
          </button>
        </div>
      </div>
    </div>
  );
};
