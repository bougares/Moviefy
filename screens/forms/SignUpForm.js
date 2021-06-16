import React from 'react';
import { View, StyleSheet } from 'react-native';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import {
  REQUIRED, TOO_LONG, TOO_SHORT, NOT_MATCHING
} from '../../model/ValidationErrors';

const UsernameInput = props => (
  <FormInput label="Username" placeholder="Type your username..." {...props} />
);

const PasswordInput = props => (
  <FormInput isSecure label="Password" placeholder="Type your password..." {...props} />
);

const ConfirmationInput = props => (
  <FormInput isSecure label="Confirmation" placeholder="Confrim your password..." {...props} />
);

class SignUpForm extends React.PureComponent {
  

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
      onChangeConfirmPassword = (value) => {
        if(value === this.state.inputPassword.value)
        this.setState({
          inputConfirmPassword : {
            value : value,
            onChange : this.onChangeConfirmPassword
          },
          metaConfirmPassword : {
            touched : false,
            error : " "
          }
        })
        else {
        
        this.setState({
          inputConfirmPassword : {
            value : value,
            onChange : this.onChangeConfirmPassword
          },
          metaConfirmPassword : {
            touched : true,
            error : NOT_MATCHING
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
          }, inputConfirmPassword : {
            value : "",
            onChange : this.onChangeConfirmPassword
          }
          ,
          metaConfirmPassword : {
            touched : true,
            error : " "
          }
        }
  render() {
    const { onSubmit } = this.props;

    return (
      <View style={styles.container}>
        <UsernameInput input={ this.state.inputUserName} meta={this.state.metaUserName }></UsernameInput>
        <PasswordInput input={ this.state.inputPassword} meta={this.state.metaPassword }></PasswordInput>
        <ConfirmationInput input={ this.state.inputConfirmPassword} meta={this.state.metaConfirmPassword }></ConfirmationInput>
        <Button title="Sign up!" onPress={() => {
           if(this.state.metaUserName.error === " " && this.state.metaUserName.touched === false && this.state.metaPassword.error === " " && this.state.metaPassword.touched === false && this.state.metaPassword.error === NOT_MATCHING )
           onSubmit(this.state.inputUserName.value, this.state.inputPassword.value)
      
        }} />
      </View>
    );
  }
}

export default SignUpForm;

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
