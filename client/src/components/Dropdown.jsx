import React, { useState } from "react";
import Login from "./Login";
import "./Dropdown.scss";
import Button from "@mui/material/Button";

export default function Dropdown({ userLogin }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const onLogin = (userInfo) => {
    userLogin(userInfo, () => {
      console.log("CALLBACK");
    }).then((res) => {
      console.log("RESULT", res);
      setUser({ name: res.data.name, email: res.data.email });
    });
  };

  const logout = () => {
    setUser({ email: "" });
  };
  return (
    <div className="loggedIn">
      {user.email !== "" ? (
        <div className="user">
          <h2 className="user--text">
            {/* Hi {user.email}! */}
          </h2>
          <button className="user--logout" onClick={logout}>LOGOUT</button>
        </div>
      ) : (
        <>
          <Button className ="user--login"onClick={() => setOpen(!open)}>Login</Button>
          <div className="dropdown">{open && <Login onLogin={onLogin} />}</div>
          {open}
        </>
      )}
    </div>
  );
}
