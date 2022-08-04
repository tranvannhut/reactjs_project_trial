import React from "react";
import { Color } from "../HOC/Color";
import ChildComponent from "./ChildComponent";
import SplitComponent from "./SplitComponent";
class MyComponent extends React.Component {
  // declare state
  state = {
    arrJobs: [
      { idJob: "Developer", salary: "1000" },
      { idJob: "Tester", salary: "800" },
      { idJob: "PM", salary: "2000" },
    ],
  };

  addJob = (job) => {
    console.log("Get data to add job ", job);
    // let newArr = this.state.arrJobs;
    // newArr.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      //   arrJobs: newArr,
    });
  };
  deleteJob = (job) => {
    let newArrayDeleted = this.state.arrJobs;
    newArrayDeleted = newArrayDeleted.filter(
      (item) => item.salary !== job.salary
    );
    this.setState({
      arrJobs: newArrayDeleted,
    });
  };
  componentDidMount() {
    console.log(">>>Call fucntion component Did Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>>Cal function component Update about previous State :  ",
      prevState,
      "and now : ",
      this.state
    );
  }
  // with class then use method render();
  render() {
    console.log(">>>Call fucntion render");
    return (
      <>
        <SplitComponent addJob={this.addJob} />

        {/* <h2>My name is {this.state.name} and age : {this.state.age}</h2> */}
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
// export default MyComponent;
export default Color(MyComponent);
