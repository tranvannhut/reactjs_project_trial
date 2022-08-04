import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./ListUser.scss";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  // solution : use promise
  //   componentDidMount() {
  //     axios.get("https://reqres.in/api/users?page=1").then((res) => {
  //       console.log("Check data for api", res.data.data);
  //     });
  //   }
  // use key async , await
  async componentDidMount() {
    let listUser = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser:
        listUser && listUser.data && listUser.data.data
          ? listUser.data.data
          : [],
    });
  }
  getDetailUser = (id) => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    console.log(this.state.listUser);
    let { listUser } = this.state;
    return (
      <div className="list_user">
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <div
                className="child_user"
                key={item.id}
                onClick={() => this.getDetailUser(item.id)}
                // style={{ textAlign: "left" }}
              >
                {item.id} - {item.email} - {item.first_name} - {item.last_name}
                {/* {item.avatar} */}
              </div>
            );
          })}
      </div>
    );
  }
}
export default withRouter(ListUser);
