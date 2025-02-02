import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            resInfo:{
                name:"dummy name",
                location:"dummy location",
            }
        }
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/vaibhavtyagi32");
        const json=await data.json();
        console.log(json)
        this.setState({
            resInfo:json
        })
    }

    render(){
        const {name,location}=this.state.resInfo;
        return(
            <div className="userCard">
                <h1>Name- {name}</h1>
                <h2>Location- {location}</h2>
            </div>
        )
    }
}
export default UserClass;