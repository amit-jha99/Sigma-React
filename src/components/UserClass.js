import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            count:0,
        };
    }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
       <h1>count:{this.state.count}</h1>
        <h2>Name : {name}</h2>
        <h3>Location:{location}</h3>
        <h4>contact :@AmitJha101</h4>
      </div>
    );
  }
}

export default UserClass;