import React, { Component } from "react";
class TaskItem extends Component {
  updateStatus = (e) => {
    let id   = this.props.task.id;
   this.props.updateStatus(id);
  };
  deleteActive = ()=>{
    let id = this.props.task.id
    this.props.deleteActive(id);
  }
  changeActive = ()=>{
    let id = this.props.task.id
    this.props.changeActive( id);
  }
  render() {
    var { index, task } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-success" : "label label-warning"
            }
            onClick={this.updateStatus}
          >
            {task.status ? "Kích Hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick = {this.changeActive}>
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick= {this.deleteActive}>
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
