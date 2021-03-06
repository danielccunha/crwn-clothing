import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  (shop) => Object.values(shop.collections ?? {})
);

export const selectCollection = (urlParam) => {
  return createSelector(
    [selectCollections],
    (collections) => collections[urlParam]
  );
};

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
