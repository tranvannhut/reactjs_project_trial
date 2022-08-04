import React from "react";

class ChildComponent extends React.Component {
  state = {
    isShow: false,
  };
  handleToggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  handleOnclickDelete = (item) => {
    console.log("handle delete item ", item);
    this.props.deleteJob(item);
  };
  // with class then use method render();
  render() {
    // console.log(this.state)
    // let name = this.props.name;
    // let age = this.props.age
    let { arrJobs } = this.props;
    let { isShow } = this.state;
    return (
      <>
        {isShow === true ? (
          <>
            <div>
              <button onClick={() => this.handleToggle()}>Hide</button>
            </div>

            <div className="arrayJob">
              {arrJobs.map((item, key) => {
                return (
                  <div key={item.idJob}>
                    {item.idJob} - {item.salary} <></>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div>
              <button onClick={() => this.handleToggle()}>Show</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   console.log("Check props", props);
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="array-job">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.idJob}>
//               {item.idJob} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
