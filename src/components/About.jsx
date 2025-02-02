import React from "react";
import UserClass from "./userClass";
class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About us Page</h1>
                <h2>Welcome to Namaste React series...</h2>
                <UserClass/>
            </div>
        )
    }
}
export default About;