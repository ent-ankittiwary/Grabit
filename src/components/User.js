import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: 6204451500</h4>
    </div>
  );
};

export default User;
