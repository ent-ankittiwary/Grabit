import {useContext} from "react";
import UserContext from "./utils/UserContext"
const About=()=>{
    const {loggedInUser}=useContext(UserContext)
    return (
        <div className="flex justify-between bg-pink-400 ">
            <h1>{loggedInUser}</h1>
        </div>
    )
}
export default About