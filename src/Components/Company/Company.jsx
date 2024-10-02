import { useDispatch } from "react-redux";
import { setCompany } from "../../Feature/ShoeSlice";

const Company = () => {
  const brands = ["Adidas", "Vans", "Nike", "Puma"];
  const dispatch = useDispatch();

  const handleCompany = (e) => {
    dispatch(setCompany(e));
  };
  return (
    <div className="md:ml-[165px] mt-[120px] md:mt-[68px] px-4  py-4">
      <h2 className="font-semibold text-xl">Chose your Brand</h2>
      <div className=" flex flex-wrap gap-7 mt-3">
        <button
          onClick={() => handleCompany("All")}
          className=" shadow-md font-semibold text-gray-600 hover:bg-gray-100 px-3 rounded-md border border-gray-600"
        >
          All Products
        </button>
        {brands.map((brand, i) => (
          <button
            key={i}
            value={brand}
            onClick={() => handleCompany(brand)}
            className=" shadow-md font-semibold text-gray-600 hover:bg-gray-100 px-3 rounded-md border border-gray-600"
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Company;
