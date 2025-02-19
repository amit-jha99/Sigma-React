import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count1:{count}</h1>
        <button onClick={()=>{
            //Never update state variable directly
            this.setState({
                count: this.state.count+1,
            });
        }}>countIncrease</button>

        <h2>Name : {name}</h2>
        <h3>Location:{location}</h3>
        <h4>contact :@AmitJha101</h4>
      </div>
    );
  }
}

export default UserClass;
