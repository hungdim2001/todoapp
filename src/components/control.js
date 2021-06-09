import React, { Component } from "react";
import Search from "./search";
import Sort from "./sort";
class Control extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <Sort></Sort>
      </div>
    );
  }
}

export default Control;
