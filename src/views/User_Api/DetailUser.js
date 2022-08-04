import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log("After call api : ", res);
    }
  }
  backToScreen = () => {
    this.props.history.push("/users");
  };
  render() {
    let { user } = this.state;
    let isEmptyUser = Object.keys(user).length === 0;
    return (
      <>
        <div className="detail_user">Information of user</div>
        {isEmptyUser === false && (
          <>
            <div>User's Id: {user.id}</div>
            <div>User's Email: {user.email}</div>
            <div>User's First Name: {user.first_name}</div>
            <div>User's Last Name: {user.last_name}</div>
            <div>
              Image user: <img src={user.avatar} />
            </div>
            <div>
              <button
                type="button"
                onClick={() => this.backToScreen()}
                style={{ height: "50px" }}
              >
                Back to screen
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
