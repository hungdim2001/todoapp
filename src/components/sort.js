import React, { Component } from "react";
class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortStatus: this.props.sort.sortStatus,
      status: this.props.sort.status,
    };
  }
  onSort = (sort, status) => {
    this.setState(
      {
        sortStatus: sort,
        status: status,
      },
      function () {
        this.props.onSort(this.state);
      }
    );
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onSort("name", 1)}>
              <a name="az" role="button">
                <span name="az" className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                </span>
                {this.state.sortStatus === "name" && this.state.status === 1 ? (
                  <i className="fa fa-check" aria-hidden="true"></i>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li onClick={() => this.onSort("name", -1)}>
              <a name="za" role="button">
                <span name="za" className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                </span>{" "}
                {this.state.sortStatus === "name" &&
                this.state.status === -1 ? (
                  <i className="fa fa-check" aria-hidden="true"></i>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onSort("status", 1)}>
              <a name="active" role="button">
                Trạng Thái Kích Hoạt{" "}
                {this.state.sortStatus === "status" &&
                this.state.status === 1 ? (
                  <i className="fa fa-check" aria-hidden="true"></i>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li onClick={() => this.onSort("status", -1)}>
              <a name="hide" role="button">
                Trạng Thái Ẩn{" "}
                {this.state.sortStatus === "status" &&
                this.state.status === -1 ? (
                  <i className="fa fa-check" aria-hidden="true"></i>
                ) : (
                  ""
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
