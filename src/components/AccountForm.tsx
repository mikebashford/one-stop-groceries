import { useState } from "react";

const AccountForm = ({ existingUser = {}, updateCallback }: Props) => {
  const [firstName, setFirstName] = useState(existingUser.firstName || "");
  const [lastName, setLastName] = useState(existingUser.lastName || "");
  const [email, setEmail] = useState(existingUser.email || "");
  const [password, setPassword] = useState(existingUser.password || "");

  const updating = Object.entries(existingUser).length !== 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    const url =
      "http://127.0.0.1:5000/" +
      (updating ? `update_user/${existingUser.id}` : "create_user");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    if (res.status !== 201 && res.status !== 200) {
      const data = await res.json();
      alert(data.message);
    } else {
      updateCallback();
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{updating ? "Update" : "Register"}</button>
    </form>
  );
};

export default AccountForm;
