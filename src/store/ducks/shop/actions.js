import { UPDATE_COLLECTIONS } from "./types";

export const updateCollections = (collections) => ({
  type: UPDATE_COLLECTIONS,
  payload: collections,
});
