import React, { Component } from "react";
import Search from "./search";
import Sort from "./sort";
class Control extends Component {
  receiveKeyWord = (keyWord) => {
    this.props.receiveKeyWord(keyWord);
  };
  render() {
    return (
      <div>
        <Search receiveKeyWord={this.receiveKeyWord}></Search>
        <Sort></Sort>
      </div>
    );
  }
}

export default Control;
