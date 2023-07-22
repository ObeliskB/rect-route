import React, { useContext } from "react";
import { Menu } from ".";
import { userContext } from "./context";

export default function Contact() {
  let user = useContext(userContext);
  return (
    <>
      <Menu />
      <h3>{user}, Ubon Ratchathani University</h3>
      <div>
        85 Sathonlamark Road
        <br />
        Warin Chamrap District
        <br />
        Ubon Ratchathani
        <br />
        Thailand 34190
      </div>
    </>
  );
}
