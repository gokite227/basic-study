import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import "resources/css/loginform.css";

export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <div class="btn-area">
      <button id="btn" onClick={onLogOutClick}>--Log Out--</button>

    </div>
  );
};