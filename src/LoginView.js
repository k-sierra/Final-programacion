import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text1Error: undefined,
      text2: '',
      text2Error: undefined,
    };
  }
  isValid(value) {
    return value.length > 0;
  }
  getLogin = () => {
    const { text1, text2 } = this.state;
    const isText1Valid = this.isValid(text1);
    const isText2Valid = this.isValid(text2);
    this.setState({
      ...this.state,
      text1Error: isText1Valid
        ? undefined
        : 'El usuario no puede estar vacio',
      text2Error: isText2Valid
        ? undefined
        : 'La contraseña no puede estar vacia',
    });
    if (isText1Valid && isText2Valid)
      Actions.home({ text1: this.state.text1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./reactnative.png')} />
        <View style={styles.inputBox}>
          <Text>Usuario</Text>
          <TextInput
            style={styles.input}
            value={this.state.text1}
            onChangeText={(text) =>
              this.setState({ ...this.state, text1: text })
            }
          />
          {this.state.text1Error && (
            <Text style={styles.errorMessage}>
              {this.state.text1Error}
            </Text>
          )}
        </View>
        <View style={styles.inputBox}>
          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={this.state.text2}
            onChangeText={(text) =>
              this.setState({ ...this.state, text2: text })
            }
          />
          {this.state.text2Error && (
            <Text style={styles.errorMessage}>
              {this.state.text2Error}
            </Text>
          )}
        </View>
        {this.state.errorMessage && (
          <Text style={styles.errorMessage}>
            {this.state.errorMessage}
          </Text>
        )}
        <Button
          onPress={this.getLogin}
          title='Acceder'
          color='#009DDC'
          accessibilityLabel='Login button'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    marginBottom: 10,
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  input: {
    borderRadius: 5,
    padding: 10,
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  logo: {
    width: 150,
    height: 175,
  },
  errorMessage: {
    marginBottom: 10,
    marginTop: 10,
    color: 'red',
  },
});
