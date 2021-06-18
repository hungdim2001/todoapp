// import { useRef } from "react";
import "./App.css";
// import React from "react";
import React, { Component } from "react";
import TaskForm from "./components/taskForm";
import Control from "./components/control";
import TaskList from "./components/taskList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      checkAddForm: false,
      taskEdit: null,
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("task")) {
      this.setState({
        task: JSON.parse(localStorage.getItem("task")),
      });
    }
  }
  receiveIdStatus = (id) => {
    let { task } = this.state;
    this.state.task.forEach((item, index) => {
      if (item.id === id) {
        task[index].status = !task[index].status;
      }
      this.setState({
        task: task,
      });
    });
    localStorage.setItem("task", JSON.stringify(this.state.task));
  };
  randomId() {
    return Math.random().toString(36).substring(7);
  }
  addActive = (e) => {
    this.setState({
      checkAddForm: !this.state.checkAddForm,
      taskEdit: null,
    });
  };
  onCloseForm = (e) => {
    this.setState({
      checkAddForm: !this.state.checkAddForm,
    });
  };
  receiveData = (data, id) => {
    var { task } = this.state;
    if (id) {
      data.id = id;
      this.state.task.forEach((item, index) => {
        if (item.id === id) {
          task.splice(index, 1);
          task.splice(index, 0, data);
          this.setState({
            task: task,
          });
          console.log(this.state.task);
          localStorage.setItem("task", JSON.stringify(this.state.task));
        }
      });
    } else {
      data.id = this.randomId();
      task.push(data);
      this.setState({
        task: task,
      });
      console.log(this.state.task);
      localStorage.setItem("task", JSON.stringify(this.state.task));
    }
  };
  receiveIdDelete = (data) => {
    var { task } = this.state;
    this.state.task.forEach((item, index) => {
      if (item.id === data) {
        task.splice(index, 1);
      }
      this.setState({
        task: task,
      });
    });
    localStorage.setItem("task", JSON.stringify(this.state.task));
  };
  receiveIdChange = (data) => {
    let { task } = this.state;

    this.state.task.forEach((item, index) => {
      if (item.id === data) {
        this.setState({
          taskEdit: data,
          checkAddForm: !this.state.checkAddForm,
        });
      }
    });
    this.showUpdate();
  };
  showUpdate = () => {
    let dataUpdate;
    let displayForm = this.state.checkAddForm ? (
      <TaskForm onCloseForm={this.onCloseForm} receiveData={this.receiveData} />
    ) : (
      ""
    );
    this.state.task.forEach((item, index) => {
      if (item.id === this.state.taskEdit) {
        dataUpdate = item;
      }
    });
    let updateForm = this.state.checkAddForm ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
        receiveData={this.receiveData}
        update={true}
        dataUpdate={dataUpdate}
      />
    ) : (
      ""
    );
    return this.state.taskEdit ? updateForm : displayForm;
  };
  render() {
    var task = this.state.task;
    let displayForm = this.showUpdate();
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {displayForm}
          </div>
          <div
            className={
              this.state.checkAddForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addActive}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <div className="row mt-15">
              <Control></Control>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  task={task}
                  receiveIdStatus={this.receiveIdStatus}
                  receiveIdDelete={this.receiveIdDelete}
                  receiveIdChange={this.receiveIdChange}
                ></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
