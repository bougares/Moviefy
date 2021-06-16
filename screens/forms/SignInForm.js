import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import { REQUIRED, TOO_LONG, TOO_SHORT } from '../../model/ValidationErrors';

const UsernameInput = props => (
  <FormInput label="Username" placeholder="Type your username..." {...props} value="eerer" onChange={() => alert("rrr")} touhced={() => alert('fff')} error="dgfgdjhfgd" />
);

const PasswordInput = props => (
  <FormInput isSecure label="Password" placeholder="Type your password..." {...props} />
);

class SignInForm extends React.PureComponent {
  
  
onChange = (value) => {
if(value.length === 0)
this.setState({
  inputUserName : {
    value : value,
    onChange : this.onChange
  },
  metaUserName : {
    touched : true,
    error : REQUIRED
  }
})
else if(value.length > 0){
  if(value.length < 15 )
this.setState({
  inputUserName : {
    value : value,
    onChange : this.onChange
  },
  metaUserName : {
    touched : false,
    error : " "
  }
})
if(value.length >= 15)
this.setState({
  inputUserName : {
    value : value,
    onChange : this.onChange
  },
  metaUserName : {
    touched : true,
    error : TOO_LONG(15)
  }
})
}
}
onChangePassword = (value) => {
  if(value.length === 0)
  this.setState({
    inputPassword : {
      value : value,
      onChange : this.onChangePassword
    },
    metaPassword : {
      touched : true,
      error : REQUIRED
    }
  })
  else if(value.length > 0){
    if(value.length < 6 )
  this.setState({
    inputPassword : {
      value : value,
      onChange : this.onChangePassword
    },
    metaPassword : {
      touched : true,
      error : TOO_SHORT(6)
    }
  })
  if(value.length >= 6)
  this.setState({
    inputPassword : {
      value : value,
      onChange : this.onChangePassword
    },
    metaPassword : {
      touched : false,
      error : " "
    }
  })
  }
  }
state = {
  inputUserName : {
    value : "",
    onChange : this.onChange
  }
  ,
  metaUserName : {
    touched : true,
    error : " "
  },
  inputPassword : {
    value : "",
    onChange : this.onChangePassword
  }
  ,
  metaPassword : {
    touched : true,
    error : " "
  },
  valid : false
}

  render() {
    const { handleNoAccount, onSubmit } = this.props;

    return (
      <View style={styles.container}>
 
      <UsernameInput input={ this.state.inputUserName} meta={this.state.metaUserName }></UsernameInput>
      <PasswordInput input={ this.state.inputPassword} meta={this.state.metaPassword }></PasswordInput>
        <Button title="Sign in!" onPress={() => {
        if(this.state.metaUserName.error === " " && this.state.metaUserName.touched === false && this.state.metaPassword.error === " " && this.state.metaPassword.touched === false )
         onSubmit(this.state.inputUserName.value, this.state.inputPassword.value)
        }
        }    />
        <Text style={styles.noAccount}>No account?</Text>
        <Button title="Sign up!"  onPress={handleNoAccount} />
      </View>
    );
  }
}

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20
  },
  noAccount: {
    textAlign: 'center'
  }
});
