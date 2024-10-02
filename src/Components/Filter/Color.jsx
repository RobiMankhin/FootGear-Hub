import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../Feature/ShoeSlice";

const Color = () => {
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.first);

  const handleColor = (e) => {
    dispatch(setColor(e));
  };
  return (
    <div className="mt-2 items-center mr-5 flex flex-col gap-2">
      <h2 className="font-semibold text-xl">Colors</h2>
      <section className="font-semibold text-sm text-gray-700">
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={color === "All"}
            onChange={() => handleColor("All")}
          />
          <h3>All</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={color === "black"}
            onChange={() => handleColor("black")}
          />
          <h3>Black</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={color === "blue"}
            onChange={() => handleColor("blue")}
          />
          <h3>Blue</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={color === "white"}
            onChange={() => handleColor("white")}
          />
          <h3>White</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={color === "red"}
            onChange={() => handleColor("red")}
          />
          <h3>Red</h3>
        </label>
        <label className="flex gap-3">
          <input
            className="w-4"
            type="radio"
            checked={color === "green"}
            onChange={() => handleColor("green")}
          />
          <h3>Green</h3>
        </label>
      </section>
    </div>
  );
};

export default Color;
