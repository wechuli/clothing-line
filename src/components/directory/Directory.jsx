import React, { Component } from "react";
import directoryData from "../../data/directory.data";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: directoryData
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(item => (
          <MenuItem key={item.id} {...item}/>
        ))}
      </div>
    );
  }
}

export default Directory;
