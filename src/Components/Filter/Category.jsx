import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Feature/ShoeSlice";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.first);

  const handleCategory = (e) => {
    dispatch(setCategory(e));
  };
  return (
    <div className="mt-3 flex flex-col items-center gap-2">
      <h2 className="font-semibold text-xl">Category</h2>
      <section className="font-semibold text-sm text-gray-700">
        <label className="flex gap-3" htmlFor="all">
          <input
            checked={category === "All"}
            onChange={() => handleCategory("All")}
            className="w-4"
            id="all"
            name="category"
            type="radio"
          />
          All
        </label>
        <label className="flex gap-3" htmlFor="sneakers">
          <input
            checked={category === "sneakers"}
            onChange={() => handleCategory("sneakers")}
            id="sneakers"
            className="w-4"
            type="radio"
          />
          <h3>Sneakers</h3>
        </label>
        <label className="flex gap-3" htmlFor="flats">
          <input
            checked={category === "flats"}
            onChange={() => handleCategory("flats")}
            id="flats"
            className="w-4"
            type="radio"
          />
          <h3>Flats</h3>
        </label>
        <label className="flex gap-3" htmlFor="sandals">
          <input
            checked={category === "sandals"}
            onChange={() => handleCategory("sandals")}
            id="sandals"
            className="w-4"
            type="radio"
          />
          <h3>Sandals</h3>
        </label>
        <label className="flex gap-3" htmlFor="heels">
          <input
            checked={category === "heels"}
            onChange={() => handleCategory("heels")}
            id="heels"
            className="w-4"
            type="radio"
          />
          <h3>Heels</h3>
        </label>
      </section>
    </div>
  );
};

export default Category;
