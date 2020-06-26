import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "./types";

import {
  firestore,
  convertCollectionsSnapshot,
} from "../../../config/firebase";

const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionsFailure = (error) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollections = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collections = convertCollectionsSnapshot(snapshot);
      console.log(collections);
      dispatch(fetchCollectionsSuccess(collections));
    })
    .catch((error) => {
      dispatch(fetchCollectionsFailure(error.message));
    });
};
