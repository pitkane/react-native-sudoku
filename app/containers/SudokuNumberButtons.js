import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  View,
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
    color: 'white',
  },
})

class SudokuNumberButtons extends Component {

  componentDidMount() {
  }

  _onNumberPress(number) {
    if (this.props.selectedIndex !== null) {
      this.props.actions.insertNumber(number, this.props.selectedIndex, this.props.board)
      this.props.actions.clearSelection()
    }
  }

  renderNumber(number) {
    return (
      <TouchableHighlight
        key={number}
        style={styles.numberContainer}
        onPress={this._onNumberPress.bind(this, number)}
      >
        <Text style={styles.numberText}>
          {number}
        </Text>
      </TouchableHighlight>
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

SudokuNumberButtons.propTypes = {
  actions: React.PropTypes.object,
  board: React.PropTypes.object.isRequired,
  selectedIndex: React.PropTypes.string,
}

export default SudokuNumberButtons
