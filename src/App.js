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
      task: [
        {
          id: this.randomId(),
          name: "hoc lap trinh",
          status: true,
        },
        {
          id: this.randomId(),
          name: "di choi",
          status: false,
        },
        {
          id: this.randomId(),
          name: "di ngu",
          status: true,
        },
        {
          id: this.randomId(),
          name: "di an",
          status: false,
        },
      ],
      checkAddForm: false,
    };
    
  }
  componentDidMount(){
    localStorage.setItem('task',JSON.stringify(this.state.task));
    this.setState({
      task :JSON.parse(localStorage.getItem('task'))    
    })
  }
  randomId() {
    return Math.random().toString(36).substring(7);
  }
  addActive = (e) => {
    this.setState({
      checkAddForm: !this.state.checkAddForm,
    });
  };
  onCloseForm = (e) => {
    this.setState({
      checkAddForm: !this.state.checkAddForm,
    });
  };

  render() {
    localStorage.setItem('task',JSON.stringify(this.state.task));
    let displayForm = this.state.checkAddForm ? (
      <TaskForm onCloseForm={this.onCloseForm} />
    ) : (
      ""
    );
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
                <TaskList task={this.state.task}></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
