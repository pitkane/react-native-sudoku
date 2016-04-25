import React, {
  Component,
  StyleSheet,
//  Text,
  View,
  Dimensions,
} from 'react-native'
import _ from 'lodash'

import SudokuNumber from './SudokuNumber'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: (Dimensions.get('window').width - (_.floor((Dimensions.get('window').width / 9)) * 9)) / 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
  },
})

class SudokuBoard extends Component {

  componentDidMount() {
  }

  render() {
    const board = this.props.board
    // console.log(board)
    return (
      <View style={styles.container}>
        {Object.keys(board).map(key => {
          let isSelected = false
          if (this.props.selectedNumber === key) isSelected = true
          return <SudokuNumber selected={isSelected} number={board[key]} key={key} keyId={key} />
        })}
      </View>
    )
  }
}

SudokuBoard.propTypes = {
  board: React.PropTypes.object.isRequired,
  selectedNumber: React.PropTypes.string,
}

export default SudokuBoard
