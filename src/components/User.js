import { useState} from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);

   
  return <div className="user-card">
    <h1>count1 :{count}</h1>
    <h1>count2:{count2}</h1>
    <h2>Name : {name}</h2>
    <h3>Location:Mumbai(mayanagri)</h3>
    <h4>contact :@AmitJha101</h4>
  </div>;
};

export default User;