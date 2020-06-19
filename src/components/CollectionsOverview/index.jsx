import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview";
import { selectCollections } from "../../store/ducks/shop/selectors";

import "./styles.scss";

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {Object.values(collections).map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
