import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dbdcdd',
  },
  numberContainer: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').width / 9,
  },
})

class SudokuBoard extends Component {

  componentDidMount() {
  }

  renderBoard() {
    const rows = []

    for (let i = 1; i < 82; i++) {
      rows.push(this.renderNumber(i))
    }
    return rows
  }

  renderNumber(number) {
    return (
      <View key={number} style={styles.numberContainer}>
        <Text>
          {number}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBoard()}
        {/* <Text>SudokuBoard: ({Dimensions.get('window').width}, {Dimensions.get('window').height})</Text> */}
      </View>
    )
  }
}

export default SudokuBoard
