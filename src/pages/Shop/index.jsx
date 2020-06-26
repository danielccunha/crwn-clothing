import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { firestore, convertCollectionsSnapshot } from "../../config/firebase";
import { updateCollections } from "../../store/ducks/shop/actions";

import CollectionsOverview from "../../components/CollectionsOverview";
import Collection from "../Collection";

function Shop({ match, updateCollections }) {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshot(snapshot);
      updateCollections(collections);
    });
  }, [updateCollections]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
