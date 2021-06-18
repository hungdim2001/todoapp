import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.dataUpdate ? this.props.dataUpdate.name : "",
      status: this.props.dataUpdate ? this.props.dataUpdate.status : false,
    };
  }

  oncloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.receiveData(this.state);
    this.oncloseForm();
  };
  onClear = (e) => {
    this.props.onCloseForm();
  };
  onUpdate = (e) => {
    e.preventDefault();
    this.props.receiveData(this.state, this.props.dataUpdate.id);
    this.oncloseForm();
  };
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.update ? "Sửa " : "Thêm "}Công Việc{" "}
            <i
              className="fa fa-times-circle-o"
              aria-hidden="true"
              onClick={this.oncloseForm}
            ></i>
          </h3>
        </div>
        <div className="panel-body">
          <form
            onSubmit={this.props.dataUpdate ? this.onUpdate : this.onSubmit}
          >
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                {this.props.dataUpdate ? "Cập nhật " : "Thêm"}
              </button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
