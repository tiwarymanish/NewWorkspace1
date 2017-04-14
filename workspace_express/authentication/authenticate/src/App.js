import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import axios from 'axios';

export default class App extends React.Component {

   // handleRequest(a){
      
   //      axios.post('http://localhost:3000/',{
   //        payload : {
   //          repoUrl : this.state.url
   //        },
   //        template: a,
   //      })
   //      .then(function(response){
   //        console.log(response);
   //      })
   //      .catch(function(err) {
   //        console.log(err);
   //      });

   //    }

  render() {
    return (
          <MuiThemeProvider>
          <FlatButton label="Login" href={"https://github.com/login/oauth/authorize?client_id=1d14d04e4e606d74da71"}/>
          
           </MuiThemeProvider>
     );
  }
}




          