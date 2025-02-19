import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div>
        <h1>About Us</h1>
        <h2>Escape the Matrix</h2>
        <User name="john cena"/>
        <UserClass name ={"The Undertaker"}location={"Mumbai"}/>
        </div>
    )
};

export default About;