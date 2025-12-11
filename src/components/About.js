import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-md">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <User
          name={"Ankit Tiwary"}
          location={"Kanpur, Uttar Pradesh, India"}
        />
      </div>
    );
  }
}

export default About;
