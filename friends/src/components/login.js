import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    login: {
      username: "",
      password: "",
    },
  };

  handleChanges = (event) => {
    this.setState({
      login: {
        ...this.state.login,
        [event.target.name]: event.target.value,
      },
    });
  };

  login = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/login", this.state.login)
      .then((response) => {
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/protected");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor="username">UserName </label>
          <input
            type="text"
            name="username"
            value={this.state.login.username}
            onChange={this.handleChanges}
          />

          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={this.state.login.password}
            onChange={this.handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
