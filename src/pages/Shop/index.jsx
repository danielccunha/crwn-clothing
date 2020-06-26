import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { firestore, convertCollectionsSnapshot } from "../../config/firebase";
import { updateCollections } from "../../store/ducks/shop/actions";

import CollectionsOverview from "../../components/CollectionsOverview";
import WithSpinner from "../../components/WithSpinner";
import Collection from "../Collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

function Shop({ match, updateCollections }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then((snapshot) => {
      const collections = convertCollectionsSnapshot(snapshot);
      updateCollections(collections);
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
