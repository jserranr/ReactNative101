import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ToastAndroid
} from 'react-native'

class AppAndroid extends Component {

  constructor (props) {
    super(props)

    this.state = { text: '' }
  }

  render () {
    console.log('Rendering on Android')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native on Android!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TextInput
          style={{ alignSelf: 'stretch' }}
          onChangeText={(text) => this.inputChanged(text)}
          value={this.state.text} />
        <TouchableHighlight
          onPress={() => ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>
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

export default AppAndroid
