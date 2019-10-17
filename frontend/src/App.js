import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      modal: false,
      // viewCompleted: false,
      activeItem: {
        title: "",
        notes: "",
        due: "",
        completed: false,
      },
      // consume api here
      todoList: [],
      // isHovering: false,
    };
  }
  componentDidMount() {
    this.Update();
  }
  Update = () => {
    //to call this.setState inside of the callback to Api.get().
    //it has to cache the reference to "this" outside of that API call.
    //otherwise, TypeError will occur
    let thisPoniter = this;
    axios
      .get("http://127.0.0.1:8000/api/todos/")
      // data is successfully retrieved from api, way of updating data to state is wrong
      .then(function(res) {
        thisPoniter.setState({ todoList: res.data.results });
      })
      // 'todoList: data' will produce an error, because of failing to retrieve data from API, so data becomes an empty string,
      //  and because .map() can not work on a string type, it needs to be a list
      .catch(err => console.log(err));
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
        .then(res => this.Update());
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/todos/", item)
      .then(res => this.Update());
  };
  // handle deletion
  // has problems:
  // did not really delete data in the database, just faking in frontend
  // problem solved!
  handleDelete = item => {
    axios.delete(`http://127.0.0.1:8000/api/todos/${item.id}`);
    let todoListCopy = this.state.todoList; // grab a copy of the todo list
    for (let i = 0; i < todoListCopy.length; i++) {
      let todo = todoListCopy[i];
      if (todo.id === item.id) {
        todoListCopy.splice(i, 1); // delete the item
        break; // we’re done! break the loop
      }
    }
    this.setState({ todoList: todoListCopy });
  };

  //create action
  createItem = () => {
    const item = {
      title: "",
      notes: "",
      due: "",
      completed: false,
    };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  //modify action
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    // const { viewCompleted } = this.state;
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
                <i class="material-icons">schedule</i> {item.title}
                <small className="text-muted d-block">due: {item.due}</small>
              </span>
              <small className="text-muted d-block">{item.notes}</small>
              <span>
                {/* <i class="material-icons">add</i> */}
                <button
                  onClick={() => this.editItem(item)}
                  className="btn btn-secondary mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={e => this.handleDelete(item)}
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
              New todos
            </button>
          </div>
        </div>

        <br></br>
        {/* list all completed todos */}
        <div className="doneItems">
          <div>
            <span className="donehead">Congrats!Mission Completed!</span>
          </div>
          {doneItems.map(item => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="completed-todo" title={item.notes}>
                <i class="material-icons">done_outline</i> {item.title}
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
