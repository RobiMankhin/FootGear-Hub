import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";

// eslint-disable-next-line react-refresh/only-export-components
const CreateFilters = createSlice({
  name: "CreateFilters",
  initialState: {
    search: "",
    company: "All",
    category: "All",
    color: "All",
    price: "All",
    finalFilteredValue: data,
    cart: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Current finalFilteredValue:", state.finalFilteredValue);
      console.log("added item : ", action.payload);

      const item = action.payload;

      if (!item) {
        console.error("Item not found:", action.payload);
        return;
      }
      const cartItem = state.cart.find((p) => p.id === action.payload.id);
      if (cartItem) {
        cartItem.qnty += 1;
      } else {
        state.cart.push({ ...item, qnty: 1 });
      }
      state.totalAmount += parseInt(item.newPrice);
    },
    removeFromCart: (state, action) => {
      const cartItemIndex = state.cart.findIndex(
        (e) => e.id === action.payload.id
      );
      const cartItem = state.cart[cartItemIndex];
      if (cartItemIndex >= 0) {
        state.totalAmount -=
          parseInt(cartItem.newPrice) * state.cart[cartItemIndex].qnty;
        state.cart.splice(cartItemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.cart.find((e) => e.id == action.payload.id);
      if (cartItem) {
        cartItem.qnty += 1;
        state.totalAmount += parseInt(cartItem.newPrice);
      }
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.cart.find((e) => e.id == action.payload.id);
      const cartItemIndex = state.cart.findIndex(
        (e) => e.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qnty -= 1;
        state.totalAmount -= parseInt(cartItem.newPrice);
      }
      if (cartItem.qnty <= 0) {
        state.totalAmount -= parseInt(cartItem.newPrice);
        state.cart.splice(cartItemIndex, 1);
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.finalFilteredValue = finalFilter(state);
    },
    setCompany: (state, action) => {
      state.company = action.payload;
      state.finalFilteredValue = finalFilter(state);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.finalFilteredValue = finalFilter(state);
    },
    setColor: (state, action) => {
      state.color = action.payload;
      state.finalFilteredValue = finalFilter(state);
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      state.finalFilteredValue = finalFilter(state);
    },
  },
});
const finalFilter = (state) => {
  const { search, company, color, category, price } = state;
  return data.filter((item) => {
    const filteringSearch = search
      ? item.title.toLowerCase().includes(search.toLowerCase())
      : item;
    const filteringCompany = company === "All" || item.company === company;
    const filteringCategory = category === "All" || item.category === category;
    const filteringColor = color === "All" || item.color === color;
    const filteringPrice = price === "All" || checkPrice(item.newPrice, price);
    return (
      filteringSearch &&
      filteringCompany &&
      filteringCategory &&
      filteringColor &&
      filteringPrice
    );
  });
};

// Helper function for price range logic
const checkPrice = (price, range) => {
  const productPrice = Number(price);

  // Handling special case: 'over200' means the price is greater than 200
  if (range === "over200") {
    return productPrice > 200;
  }

  // Handling other ranges like '50-100'
  const rangeParts = range.split("-"); // Spliting the range into two parts
  const minPrice = Number(rangeParts[0]); // The first part is the minimum price

  // If there's no second part, assuming no upper limit (only a minimum limit)
  const maxPrice = rangeParts[1] ? Number(rangeParts[1]) : Infinity;

  // Checking if the product's price is within the range
  return productPrice >= minPrice && productPrice <= maxPrice;
};

// alternative
// const checkPrice = (price, range) => {
//   const [min, max] = range.split("-").map(Number);
//   const productPrice = Number(price);

//   if (range === "over200") return productPrice > 200;
//   return productPrice >= min && productPrice <= (max || Infinity);
// };

export const {
  addToCart,
  setSearch,
  setCompany,
  setCategory,
  setColor,
  setPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = CreateFilters.actions;
export default CreateFilters.reducer;
