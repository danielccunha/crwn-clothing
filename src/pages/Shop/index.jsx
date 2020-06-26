import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollections } from "../../store/ducks/shop/actions";

import CollectionsOverviewContainer from "../../components/CollectionsOverview/container";
import CollectionContainer from "../Collection/container";

function Shop({ match, fetchCollections }) {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(Shop);
