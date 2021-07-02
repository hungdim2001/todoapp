import React, { Component } from "react";

import TaskItem from "./taskItem";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  updateStatus = (id) => {
    this.props.receiveIdStatus(id);
  };

  deleteActive = (id) => {
    this.props.receiveIdDelete(id);
  };
  changeActive = (id) => {
    this.props.receiveIdChange(id);
  };
  onFilter = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.receiveValueFilter(this.state);
      }
    );
  };
  render() {
    var task = this.props.task;

    var elementTask = task.map((item, index) => {
      return (
        <TaskItem
          key={item.id}
          index={index}
          task={item}
          updateStatus={this.updateStatus}
          deleteActive={this.deleteActive}
          changeActive={this.changeActive}
        >
          {" "}
        </TaskItem>
      );
    });

    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={this.onFilter}
                name="filterName"
              />
            </td>
            <td>
              <select
                className="form-control"
                onChange={this.onFilter}
                name="filterStatus"
              >
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elementTask}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
