import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem";
import { selectDirectorySections } from "../../store/ducks/directory/selectors";

import "./styles.scss";

function Directory({ sections }) {
  return (
    <div className="directory">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
