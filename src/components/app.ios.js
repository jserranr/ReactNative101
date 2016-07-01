import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
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
        <Text style={styles.welcome}>
          Welcome to React Native on iOS!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.ios.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
          onChangeText={(text) => this.inputChanged(text)}
          placeholder={'Say something'}
          value={this.state.text} />
        <TouchableHighlight
          style={{ alignSelf: 'stretch', padding: 10, margin: 10 }}
          underlayColor={'red'}>
          <View>
            <Text style={styles.instructions}>Button</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  inputChanged (text) {
    console.log(text)
    this.setState({ text: text.text })
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
  }
})

export default AppIOS
