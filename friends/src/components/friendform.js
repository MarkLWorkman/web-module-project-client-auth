import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialValues = {
  name: "",
  email: "",
  age: "",
};

export default function FriendForm(props) {
  const [values, setValues] = useState(initialValues);
  const { getFriends, friends } = props;

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const addFriend = (newFriend) => {
    axiosWithAuth()
      .post(`/api/friends`, newFriend)
      .then((response) => {
        console.log(response.response);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .then(() => {
        getFriends();
      });
  };

  const submit = (event) => {
    event.preventDefault();

    const newFriend = {
      ...values,
      id: friends.length + 1,
    };
    addFriend(newFriend);
    setValues(initialValues);
  };

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          onChange={handleChanges}
          value={values.name}
          placeholder="Name"
        />
      </label>
      <label>
        Age
        <input
          name="age"
          type="number"
          onChange={handleChanges}
          value={values.age}
          placeholder="Age"
        />
      </label>
      <label>
        Email
        <input
          name="email"
          type="text"
          onChange={handleChanges}
          value={values.email}
          placeholder="Email"
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
