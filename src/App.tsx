import React, { useState } from "react";
import "./App.css";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import { Inputs } from "./models/user";
import UserData from "./components/UserData/UserData";

function App() {
  const [usersData, setUsersData] = useState<Inputs[]>([]);
  return (
    <div className="App">
      <RegisterUser userData={usersData} setUserData={setUsersData} />
      <UserData userData={usersData} />
    </div>
  );
}

export default App;
