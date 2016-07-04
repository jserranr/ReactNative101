import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert
} from 'react-native'

class AppIOS extends Component {

  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.welcome}>
            Welcome to React Native on iOS!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit app.ios.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.inputWrapper}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
          onChangeText={(text) => this.inputChanged(text)}
          placeholder={'Say something'}
          value={this.state.text} />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            style={{
              alignSelf: 'stretch',
              padding: 10, margin: 10,
              backgroundColor: '#900C3F', borderRadius: 5}}
            underlayColor={'#581845'}
            onPress={() => this.createAlert()}>
            <View>
              <Text style={styles.buttonText}>Button</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  inputChanged (text) {
    console.log(text)
    this.setState({ text: text.text })
  }

  createAlert () {
    Alert.alert(
      'Very important Alert!',
      'Did you enjoy react native?',
      [
        { text: 'Ask me later', onPress: () => console.log('This guy is mocking you') },
        { text: 'Cancel', onPress: () => console.log('cancel pressed'), style: 'cancel' }
      ]
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonText: {
    color: 'white'
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  inputWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start'
  }
})

export default AppIOS
