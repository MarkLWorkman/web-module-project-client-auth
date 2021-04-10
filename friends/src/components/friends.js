import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state,
          friends: [...res.data],
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div>
        <FriendForm getFriends={this.getFriends} friends={this.state.friends} />
        {this.state.friends.map((friend) => {
          return (
            <div>
              <p> Name: {friend.name}</p>
              <p> Age: {friend.age}</p>
              <p> Email: {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
