import React from "react";

class SplitComponent extends React.Component {
  state = {
    idJob: "",
    salary: "",
  };
  changeValueidJob = (event) => {
    this.setState({
      idJob: event.target.value,
    });
  };
  changeValuesalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleClickButton = (event) => {
    event.preventDefault();
    if (!this.state.idJob || !this.state.salary) {
      alert("Please enter data");
      return;
    }
    this.props.addJob({
      idJob: this.state.idJob,
      salary: this.state.salary,
    });
    this.setState({
      idJob: "",
      salary: "",
    });
    console.log(">>> Check data form", this.state);
  };
  render() {
    return (
      <form>
        <label htmlFor="idJob">Job</label>
        <input
          value={this.state.idJob}
          type="text"
          onChange={(event) => this.changeValueidJob(event)}
        />
        <br />
        <label htmlFor="idJob">Salary</label>
        <input
          value={this.state.salary}
          type="text"
          onChange={(event) => this.changeValuesalary(event)}
        />
        <br />
        <button
          style={{ color: "red" }}
          type="submit"
          onClick={(event) => this.handleClickButton(event)}
        >
          Click Me{" "}
        </button>
      </form>
    );
  }
}
export default SplitComponent;
