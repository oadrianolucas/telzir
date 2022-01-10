import { FaArrowCircleUp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-center text-white bg-gray-900 py-10">
      <h4 className="font-md">© 2021 - Telzir - Direitos Reservados</h4>
      <button className="absolute right-0 p-2 text-2xl">
        <a href="#" className="">
          <FaArrowCircleUp />
        </a>
      </button>
    </footer>
  );
};
