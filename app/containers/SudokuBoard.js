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
    // console.log(this.props)
    return (
      <View style={styles.container}>
        {Object.keys(board).map(key => {
          let isSelected = false
          let isAffected = false
          if (this.props.selectedNumber === key) {
            isSelected = true
          }
          if (_.get(this.props.affectedIndexes, key) !== undefined) {
            // console.log(_.get(this.props.affectedIndexes, key))
            isAffected = true
          }
          return (
            <SudokuNumber
              isAffected={isAffected}
              selected={isSelected}
              number={board[key]}
              key={key}
              keyId={key}
            />
          )
        })}
      </View>
    )
  }
}

SudokuBoard.propTypes = {
  board: React.PropTypes.object.isRequired,
  selectedNumber: React.PropTypes.string,
  affectedIndexes: React.PropTypes.object,
}

export default SudokuBoard
