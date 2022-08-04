import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    title: "",
  };
  // notify = () => toast("Wow so easy !");
  changeValue = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    // Check validate for item title
    if (!this.state.title) {
      // console.log(toast)
      toast.error(`Please enter data for title`);
      return;
    }
    // Add new todo
    this.props.addNewTodo({
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    });
    // set value empty after add new todo
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <h1> Todos List</h1>
        <input
          type="text"
          value={title}
          onChange={(event) => this.changeValue(event)}
        />
        <button
          className="add"
          type="button"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
