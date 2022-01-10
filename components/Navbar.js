import Head from "next/head";
import { BsFillPhoneLandscapeFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
export const Navbar = () => {
  return (
    <div className="">
      <Head>
        <title>Telzir</title>
      </Head>
      <nav className="flex items-center justify-between flex-wrap p-3  container mx-auto">
        <div className="flex items-center flex-shrink-0 mr-6">
          <BsFillPhoneLandscapeFill className="text-4xl mr-2 text-white" />
          <span className="font-semibold text-xl text-white ">Telzir</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="menu-button flex items-center px-2 py-2
            text-gray-500 text-2xl"
          >
            <FiMenu />
          </button>
        </div>
        <div
          className="menu-content  font-thin	w-full hidden flex-grow lg:block lg:flex
        lg:items-center lg:w-auto"
        >
          <div className="text-md font-thin text-white lg:flex-grow ">
            <a
              href="#cards"
              className="block mt-4 lg:inline-block lg:mt-0
              hover:text-gray-400 mr-4"
            >
              Fale Mais
            </a>
            <a
              href="#compare"
              className="block mt-4 lg:inline-block lg:mt-0
              hover:text-gray-400 mr-4"
            >
              Ajuda
            </a>
            <a
              href="#deals"
              className="block mt-4 lg:inline-block lg:mt-0
              hover:text-gray-400 mr-4"
            >
              Por que Telzir
            </a>
          </div>
          <button
            className="border py-2 px-6 mt-4 rounded-md
            font-semibold text-white border-gray-200 lg:mt-0
            hover:bg-white hover:text-gray-900"
          >
            Contratar
          </button>
        </div>
      </nav>
    </div>
  );
};
