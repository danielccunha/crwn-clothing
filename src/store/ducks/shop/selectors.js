import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (urlParam) => {
  return createSelector(
    [selectCollections],
    (collections) => collections[urlParam]
  );
};
