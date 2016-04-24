import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'

const topRow = ['1', '2', '3', '4', '5']
const bottomRow = ['6', '7', '8', '9', 'X']

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00aca6',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
  },
  numberContainer: {
    width: (Dimensions.get('window').width) / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontWeight: '600',
    fontSize: 24,
    color: 'white'
  },
})

class SudokuNumberButtons extends Component {

  componentDidMount() {
  }

  renderNumber(item) {
    return (
      <View key={item} style={styles.numberContainer}>
        <Text style={styles.numberText}>
          {item}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          {topRow.map((item) => { return this.renderNumber(item) })}
        </View>
        <View style={styles.bottomRow}>
          {bottomRow.map((item) => { return this.renderNumber(item) })}
        </View>
      </View>
    )
  }
}

export default SudokuNumberButtons
