import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Feature/ShoeSlice";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";

const Header = ({
  handleFilters,
  isOpen,
  handleDetail,
  selectedProduct,
  setSelectedProduct,
}) => {
  const { cart } = useSelector((state) => state.first);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed z-50 left-0 top-0 right-0  border-b-2 flex p-4 opacity-95 bg-white">
      <div className=" flex flex-col md:flex-row gap-4 md:gap-12">
        <h1 className="text-xl md:text-2xl font-bold">FootGear Hub</h1>
        <div>
          <input
            onChange={handleSearch}
            placeholder="Search your product.."
            className="md:w-48 w-36 text-sm md:text-base px-2 py-1 rounded-md border border-gray-800"
          />
        </div>
      </div>
      <div className="flex items-center flex-col gap-[10px] md:flex-row absolute md:right-4 right-2 md:top-6 top-[15px] text-gray-600">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fortune-roll.netlify.app/"
        >
          <IoGameController className="text-xl cursor-help" />
        </a>
        <div
          onClick={handleFilters}
          className=" rounded-md border-slate-300 border cursor-pointer md:hidden mx-auto bg-white"
        >
          {isOpen ? (
            <div className="flex flex-col text-2xl font-semibold items-center">
              <RiArrowLeftWideFill />
            </div>
          ) : (
            <div className="flex flex-col text-2xl font-semibold items-center">
              <RiArrowRightWideFill />
            </div>
          )}
        </div>
        <div className="relative mx-4" aria-label="cart">
          <FaCartArrowDown
            onClick={handleClick}
            className="text-2xl cursor-pointer"
          />
          <span className="top-0 right-0 translate-x-3 transform -translate-y-2 flex items-center justify-center size-[18px] border border-gray-700  bg-gray-600 text-white rounded-full absolute font-bold text-xs">
            {cart.length}
          </span>
        </div>
        <div className="">
          <Cart
            handleDetail={handleDetail}
            open={open}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
