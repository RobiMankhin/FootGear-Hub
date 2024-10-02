import Category from "./Category";
import Color from "./Color";

import Price from "./Price";

const Filter = ({ isOpen }) => {
  return (
    <div>
      <div
        className={
          "md:block z-30 fixed hidden bg-white -40 w-[150px] h-screen top-[115px] md:top-[68px] border-r-21 "
        }
      >
        <section
          style={{ maxHeight: "80vh", overflowY: "auto" }}
          className="flex flex-col pb-7 md:pb-1"
        >
          <Category />
          <Color />
          <Price />
        </section>
      </div>
      <div
        className={`md:hidden fixed bg-white z-40 w-[150px] h-screen top-[115px] md:top-[68px] border-r-21 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        } ease-in-out duration-300`}
      >
        <section
          style={{ maxHeight: "80vh", overflowY: "auto" }}
          className="flex flex-col pb-7 md:pb-1"
        >
          <Category />
          <Color />
          <Price />
        </section>
      </div>
    </div>
  );
};

export default Filter;
