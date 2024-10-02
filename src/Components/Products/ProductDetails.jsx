import { useEffect } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Feature/ShoeSlice";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ selectedProduct, handleClose }) => {
  const { cart, totalAmount } = useSelector((state) => state.first);
  const dispatch = useDispatch();

  if (!selectedProduct) {
    console.log("no product selected");
    return null;
  }
  const productInCart = cart.find((item) => item.id === selectedProduct.id);

  const handleDecreaseQnty = () => {
    if (productInCart.qnty > 1) {
      dispatch(decreaseQuantity(productInCart));
    }
    // Checking if quantity has dropped to 0 after decrement
    if (productInCart.qnty == 1) {
      dispatch(removeFromCart(productInCart));

      handleClose(); // Closing modal when quantity is 0
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(productInCart));
    handleClose(); // Closing modal after removing item
  };

  // Ensuring the selected product is up-to-date in case the quantity changes in the cart
  useEffect(() => {
    if (!productInCart || productInCart.qnty === 0) {
      handleClose(); // Automatically close if product is no longer in the cart or quantity is 0
    }
  }, [cart, selectedProduct, handleClose, productInCart]);
  return (
    <div className="bg-slate-300 opacity-95 flex items-center justify-center fixed z-50 left-0 right-0 top-0 bottom-0">
      <div className="relative flex flex-col gap-2 rounded-lg justify-center font-bold  w-[300px] md:w-[500px] lg:w-[700px] p-2 border-[8px] bg-white">
        <h2 className="text-center text-base">Total : {totalAmount} Taka</h2>
        <div className="flex items-center flex-col py-2 md:flex-row md:gap-4 gap-1 bg-amber-300 rounded-md p-1">
          <img
            className="md:w-[140px] w-[95px] rounded-md cursor-pointer"
            src={productInCart.img}
            alt={productInCart.title}
          />
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex flex-col gap-1 md:gap-2 font-bold">
              <h2> {productInCart.title}</h2>
              <h2>
                Price: <span>{productInCart.newPrice}</span> taka
              </h2>
              <h1 className="flex gap-2 items-center">
                Quantity:
                <div className="flex bg-neutral-300 gap-2 rounded-md px-1 items-center">
                  <button
                    onClick={() => dispatch(increaseQuantity(productInCart))}
                    className="bg-slate-300 px-1 hover:bg-amber-50 rounded-md"
                  >
                    +1
                  </button>
                  <span className="text-base px-1">
                    {productInCart.qnty || 0}
                  </span>
                  <button
                    onClick={handleDecreaseQnty}
                    className="bg-slate-300 px-1 hover:bg-amber-50 rounded-md"
                  >
                    -1
                  </button>
                </div>
              </h1>
            </div>
            <button
              onClick={handleRemoveItem}
              className="flex items-center mt-auto justify-center font-semibold text-white w-28 md:w-12 h-6 rounded-md hover:bg-red-600 bg-red-800"
            >
              <FaTrash size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
