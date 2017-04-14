import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import UserList from './UserList';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {allusers:[],username: '',users:[],display:null,socket:io('http://localhost:8080') };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);

  }
  componentDidMount() {

      this.state.socket.on('all users',this.displayNames.bind(this));
      // this.state.socket.on('user Joined',this.userJoined.bind(this));
      // this.state.socket.on('user left',this.userLeft.bind(this));

  }
  displayNames(data){
    console.log(data,'names after calling all user');
    var newDta= JSON.parse(data);
    var arr = [];
    for (var prop in newDta) {
      var obj = {"name":prop,"status":newDta[prop]}
      arr.push(obj);
      console.log(arr,"object passed to allusers");
    }
   this.setState({allusers:arr,display:true});
  }
  
  // userLogin(data){
   
  //          var arr = [];
  //          data.forEach((item)=>{
  //              arr.push(item);
  //          });
  //          //console.log(arr);
  //          this.setState({users:arr,display:true});

  // }
 

  usernameChangeHandler(event) {

    var value = event.target.value;
    this.setState({ username:value });
  }

  usernameSubmitHandler() {
    console.log(this.state.username)
       this.state.socket.emit('new user', this.state.username);
  
  }

  render() {
    const style=
    {
      width:300,
      padding:20,
      margin:'auto',
      marginTop:20
    }
    const styles = {
  margin: 12,
}
var displaydata= {
  display:this.state.display ? 'none':'block'
}

    return (
      <div>
      <AppBar
      title="Bob"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <div style={displaydata}>
      <Paper style={style}>
      
        <h1>Login</h1>
        
      <TextField
      hintText="Enter username"
      floatingLabelText="Username"
       onChange={this.usernameChangeHandler}/>
      <RaisedButton label="Login" primary={true} style={styles} onClick={this.usernameSubmitHandler} />
         
       </Paper>
       </div>
       <UserList allusers={this.state.allusers}/>
      </div>
    );
  }
}

export default App;
