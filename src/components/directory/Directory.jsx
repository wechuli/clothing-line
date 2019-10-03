import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import directoryData from "../../data/directory.data";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = props => {
  const { sections } = props;
  return (
    <div className="directory-menu">
      {sections.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
