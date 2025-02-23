import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo:{
        name:"The Champ",
        location:"Mumbai",
        avatar_url:"https://www.dummyphoto.com"
      }
    };
    // console.log(this.props.name + " child Construtor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child component Did mount");
    const data = await fetch("https://api.github.com/users/amit-jha99");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    });
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }
  render() {
    

    // console.log(this.props.name + "child render");
    
    return (
      <div className="user-card">
      <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location:{this.state.userInfo.location}</h3>
        <h4>contact :@AmitJha101</h4>
      </div>
    );
  }
}

export default UserClass;
