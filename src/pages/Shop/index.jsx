import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollections } from "../../store/ducks/shop/actions";
import { selectIsCollectionLoaded } from "../../store/ducks/shop/selectors";

import CollectionsOverview from "../../components/CollectionsOverview";
import WithSpinner from "../../components/WithSpinner";
import Collection from "../Collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

function Shop({ match, isLoaded, fetchCollections }) {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={!isLoaded} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={!isLoaded} {...props} />
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
