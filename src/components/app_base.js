import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native'
import styles from '../styles'

export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = { text: '' }
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
          style={styles.input}
          onChangeText={(text) => this.inputChanged(text)}
          value={this.state.text} />
        <TouchableHighlight
          style={styles.button}
          underlayColor={'#515151'}
          placeholder={'hello'}
          onPress={this.createAlert.bind(this)}>
          <Text style={[styles.instructions, { color: 'white', fontWeight: 'bold' }]}>
            Button
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  createAlert () {
    Alert.alert(
      'Very important Alert!',
      'Did you enjoy react native?',
      [
        { text: 'Ask me later', onPress: () => console.log('This guy is mocking me') },
        { text: 'Cancel', style: 'cancel' }
      ]
    )
  }

  inputChanged (text) {
    console.log(text)
    this.setState({ text })
  }
}
