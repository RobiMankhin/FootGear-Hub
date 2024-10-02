import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../Feature/ShoeSlice";

const Price = () => {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.first);

  const handlePrice = (e) => {
    dispatch(setPrice(e));
  };
  return (
    <div className="mt-2 items-center flex flex-col gap-2">
      <h2 className="font-semibold ml-2 text-xl">
        Price <span className="text-sm">(BDT)</span>
      </h2>
      <section className="font-semibold text-sm text-gray-700">
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={price === "All"}
            onChange={() => handlePrice("All")}
          />
          <h3>All</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={price === "0-50"}
            onChange={() => handlePrice("0-50")}
          />
          <h3>0-50</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={price === "50-100"}
            onChange={() => handlePrice("50-100")}
          />
          <h3>51-100</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={price === "100-150"}
            onChange={() => handlePrice("100-150")}
          />
          <h3>101-150</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={price === "150-200"}
            onChange={() => handlePrice("150-200")}
          />
          <h3>151-200</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={price === "over200"}
            onChange={() => handlePrice("over200")}
          />
          <h3>over 200</h3>
        </label>
      </section>
    </div>
  );
};

export default Price;
