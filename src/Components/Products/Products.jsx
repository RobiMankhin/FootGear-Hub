// import data from "./Data";
import { FaStar, FaCartPlus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Feature/ShoeSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { finalFilteredValue } = useSelector((state) => state.first);

  return (
    <div className="flex gap-7 flex-wrap md:ml-[180px] justify-center md:justify-start mt-10">
      {finalFilteredValue.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col p-3 rounded-lg items-center shadow-gray-400 shadow-lg"
          >
            <div className=" h-[135px]">
              <img className="w-[130px] " src={item.img} alt={item.title} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">{item.title}</h2>
              <div className="flex items-center text-sm">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="ml-2 text-gray-700">{item.reviews}</span>
              </div>
              <div className="text-stone-700 flex items-center w-[142px] justify-between ">
                <div className="text-sm font-semibold flex gap-2">
                  <del>{item.prevPrice}</del>
                  <h3>{item.newPrice}</h3>
                </div>
                <FaCartPlus
                  onClick={() => dispatch(addToCart(item))}
                  className=" hover:text-amber-600 cursor-pointer text-2xl"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
