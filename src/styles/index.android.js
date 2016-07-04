import {
  StyleSheet
} from 'react-native'
import baseStyles from './index_base'
import { extendStyle } from './utils'

export default StyleSheet.create(extendStyle(baseStyles, {
  button: {
    backgroundColor: '#528b2e'
  }
}))
