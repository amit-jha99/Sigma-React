import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent component Did mount");
      }
    render(){
        console.log("Parent render");
        return(
            
            <div>
            <h1>About Us</h1>
            <h2>Escape the Matrix</h2>
            
            <UserClass name ={"First "}location={"Mumbai"}/>
            <UserClass name ={"Second"}location={"United States of America"}/>
            <UserClass name ={"Third"}location={"Japan"}/>
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