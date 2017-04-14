import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
class UserList extends Component {
constructor(props) {
    super(props);
    this.state={
      value:''
    }
  }

   render() {
    const style=
    {
      width:300,
      padding:20,
      marginTop:20
    }
  

var allusers = this.props.allusers.map((username,i)=>{
 
return(
 <li key={i}>
    {username.name}   {username.status}
  </li>);

});

    return ( 

      <Paper style={style}>
      <h3>All users </h3>
       {allusers} 
     
       </Paper>
    );
  }
}

export default UserList;