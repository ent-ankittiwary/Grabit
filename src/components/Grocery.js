import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>It's Grocery Page!! </h1>
      <h2>It contains Lots of Components</h2>
    </div>
  );
};

export default Grocery;
