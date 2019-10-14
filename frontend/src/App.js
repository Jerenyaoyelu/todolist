import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        notes: "",
        created_at: "",
        completed: false,
      },
      // consume api here
      todoList: [],
      // isHovering: false,
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/api/todos/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
    console.log("tt", this.state.todoList);
  };
  // to control the Modal's state
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  // handle submission
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://127.0.0.1:8000/api/todos/${item.id}`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/todos/", item)
      .then(res => this.refreshList());
  };
  // handle deletion
  handleDelete = item => {
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${item.id}`)
      .then(res => this.refreshList());
  };
  //create action
  createItem = () => {
    const item = {
      title: "",
      notes: "",
      created_at: "",
      completed: false,
    };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  //modify action
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  //display completed todos
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  // handleMouseHover = () => {
  //   this.setState(this.toggleHoverState);
  // };

  // toggleHoverState = state => {
  //   return {
  //     isHovering: !state.isHovering,
  //   };
  // };
  // //display different lists of todos based on completed or not
  // renderTabList = () => {
  //   return (
  //     <div className="my-5 tab-list">
  //       <span
  //         onClick={() => this.displayCompleted(false)}
  //         className={this.state.viewCompleted ? "" : "active"}
  //       >
  //         ToDo
  //       </span>
  //       <span
  //         onClick={() => this.displayCompleted(true)}
  //         className={this.state.viewCompleted ? "active" : ""}
  //       >
  //         Done
  //       </span>
  //     </div>
  //   );
  // };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const todoItems = this.state.todoList.filter(
      item => item.completed === false
    );
    const doneItems = this.state.todoList.filter(
      item => item.completed === true
    );
    return (
      <div>
        {/* list all of todos */}
        <div className="todoItems">
          {todoItems.map(item => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {/* displaying place in front of eidt button */}
                {item.title}
              </span>
              <span>
                <button
                  onClick={() => this.editItem(item)}
                  className="btn btn-secondary mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.handleDelete(item)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
          <div className="my-4">
            <button
              onClick={() => this.createItem()}
              className="btn btn-primary"
            >
              Add task
            </button>
          </div>
        </div>

        <br></br>
        {/* list all completed todos */}
        <div className="doneItems">
          <div>
            <span className="">Done</span>
          </div>
          {doneItems.map(item => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="completed-todo" title={item.notes}>
                {/* displaying place in front of eidt button */}
                {item.title}
              </span>
              <span>
                <button
                  onClick={() => this.handleDelete(item)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </div>
      </div>
    );
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;
