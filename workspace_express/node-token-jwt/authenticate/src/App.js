import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {

  

  render() {
    return (
          <MuiThemeProvider>
          <FlatButton label="Login" />
          
           </MuiThemeProvider>
     );
  }
}




          