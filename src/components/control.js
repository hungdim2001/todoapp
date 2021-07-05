import React, { Component } from "react";
import Search from "./search";
import Sort from "./sort";
class Control extends Component {
  receiveKeyWord = (keyWord) => {
    this.props.receiveKeyWord(keyWord);
  };
  onSort = (data) => {
    this.props.onSort(data);
  };
  render() {
    return (
      <div>
        <Search receiveKeyWord={this.receiveKeyWord}></Search>
        <Sort onSort={this.onSort}
        sort={this.props.sort}></Sort>
      </div>
    );
  }
}

export default Control;
