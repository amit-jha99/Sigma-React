import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent Constructor");
    }
    render(){
        console.log("Parent render");
        return(
            
            <div>
            <h1>About Us</h1>
            <h2>Escape the Matrix</h2>
            
            <UserClass name ={"The Undertaker"}location={"Mumbai"}/>
            </div>
        )
    }
}
// const About = ()=>{
//     return(
//         <div>
//         <h1>About Us</h1>
//         <h2>Escape the Matrix</h2>
        
//         <UserClass name ={"The Undertaker"}location={"Mumbai"}/>
//         </div>
//     )
// };

export default About;