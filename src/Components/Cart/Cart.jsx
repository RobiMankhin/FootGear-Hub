import { FaTrash } from "react-icons/fa";
import { GiEmptyWoodBucketHandle } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Feature/ShoeSlice";
import ProductDetails from "../Products/ProductDetails";

const Cart = ({ handleDetail, open, selectedProduct, setSelectedProduct }) => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.first);

  const openProductDetails = (product) => {
    handleDetail(product);
  };

  return (
    <div
      className={`absolute z-40 md:p-2 p-1 text-teal-950 font-bold text-sm bg-white right-0 md:top-[45px] top-[94px] border border-gray-600 rounded-md transition-all duration-500 ${
        open
          ? "bg-opacity-95 scale-100 opacity-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <h2 className="text-center text-base">Total : {totalAmount} Taka</h2>
      <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
        {cart.length ? (
          cart.map((e) => (
            <div
              key={e.id}
              className=" mt-2 rounded-md w-[270px] md:w-[390px] mx-auto transform transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center md:flex-row md:gap-4 gap-1 bg-amber-300 rounded-md p-1">
                <img
                  onClick={() => openProductDetails(e)}
                  className="md:w-[140px] w-[95px] rounded-md cursor-pointer"
                  src={e.img}
                />
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <div className="flex flex-col gap-1 md:gap-2 font-bold">
                    <h2> {e.title}</h2>
                    <h2>
                      Price: <span>{e.newPrice}</span> taka
                    </h2>
                    <h1 className="flex gap-2 items-center">
                      Quantity:
                      <div className="flex bg-neutral-300 gap-2 rounded-md px-1 items-center">
                        <button
                          onClick={() => dispatch(increaseQuantity(e))}
                          className="bg-slate-300 px-1 hover:bg-amber-50 rounded-md"
                        >
                          +1
                        </button>
                        <span className="text-base px-1">{e.qnty}</span>
                        <button
                          onClick={() => dispatch(decreaseQuantity(e))}
                          className="bg-slate-300 px-1 hover:bg-amber-50 rounded-md"
                        >
                          -1
                        </button>
                      </div>
                    </h1>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(e))}
                    className="flex items-center mt-auto justify-center font-semibold text-white w-28 md:w-12 h-6 rounded-md hover:bg-red-600 bg-red-800"
                  >
                    <FaTrash size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex px-1 items-center">
            <h2 className="w-36 text-sm">Cart is Empty</h2>
            <GiEmptyWoodBucketHandle size={40} />
          </div>
        )}
      </div>
      {/* Rendering ProductDetails when selectedProduct is set */}
      {selectedProduct && (
        <ProductDetails handleClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default Cart;
