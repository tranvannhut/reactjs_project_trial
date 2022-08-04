import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import "./ListTodo.scss";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "1",
        title: "Sweep and clean the floor",
      },
      {
        id: "2",
        title: "Cooking rice",
      },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    // let addListTodo = this.state.listTodos;
    let { listTodos } = this.state;
    listTodos = [...listTodos, todo];
    this.setState({
      listTodos: listTodos,
    });
    toast.success(`Add new todo success!`);
  };
  // handle delete todo
  handleDeleteTodo = (todo) => {
    // declare variable new array based on list todo
    let { listTodos } = this.state;
    listTodos = listTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: listTodos,
    });
    toast.success(`Deleted todo success!`);
  };
  // handle event update Todo
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyTodo = Object.keys(editTodo).length === 0;
    if (isEmptyTodo === false && editTodo.id === todo.id) {
      // copy list todo
      let listTodoCopy = [...listTodos];

      // this.state
      //Find index of specific object using findIndex method.
      let objIndex = listTodos.findIndex((item) => item.id == editTodo.id);
      //Update object's name property.
      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update Todo success!");
      return;
    }

    this.setState({
      editTodo: todo,
    });
  };
  //handle event edit data for Todo to Update
  updateTodoData = (event) => {
    let dataTodoUpdate = { ...this.state.editTodo };
    dataTodoUpdate.title = event.target.value;
    this.setState({
      editTodo: dataTodoUpdate,
    });
    console.log("Todo Change", this.state.editTodo);
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyTodo = Object.keys(editTodo).length === 0;
    // console.log("Check empty object ", isEmptyTodo);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyTodo === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) => this.updateTodoData(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}

                  <button
                    className="edit"
                    type="button"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyTodo === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    type="Button"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
