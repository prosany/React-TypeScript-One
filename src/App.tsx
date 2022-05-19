import React from "react";
import User from "./components/User";

const App: React.FC = () => {
  const handleChnage = () => {
    console.log("handleChnage");
  };

  const handleChnage2 = () => {
    console.log("handleChnage2");
  };
  return (
    <React.Fragment>
      Hello <code>React</code>
      <User
        name="Mahabub Hasan Sany"
        age={25}
        handleChnage={handleChnage}
        handleChnage2={handleChnage2}
      />
    </React.Fragment>
  );
};

export default App;
