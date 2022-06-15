import * as React from "react";
import "./UserData.css";
import { Inputs } from "../../models/user";

interface IUserDataProps {
  userData: Inputs[] | undefined;
}

const UserData: React.FunctionComponent<IUserDataProps> = ({ userData }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((user: Inputs, key: number) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.address.country}</td>
                  <td>{user.address.state}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.pincode}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default UserData;
