import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../store/ducks/directory/selectors";
import MenuItem from "../MenuItem";
import { Container } from "./styles";

function Directory({ sections }) {
  return (
    <Container>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
