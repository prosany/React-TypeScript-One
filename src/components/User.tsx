import React, { useState } from "react";

interface IUser {
  name?: string;
  age: number;
  handleChnage: () => void;
  handleChnage2: () => void;
}

const User: React.FC<IUser> = ({ name, age, handleChnage, handleChnage2 }) => {
  const [newName, setNewName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };
  return (
    <React.Fragment>
      <br />
      Hello from <code>User</code>
      <div>
        Name: {newName ? newName : name} Age: {age}
      </div>
      <button onClick={handleChnage}>Change</button>
      <button onClick={handleChnage2}>Change 2</button>
      <div>
        <input type="text" name="username" onChange={handleChange} />
      </div>
    </React.Fragment>
  );
};

export default User;
