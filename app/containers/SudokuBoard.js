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
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: (Dimensions.get('window').width - (_.floor((Dimensions.get('window').width / 9)) * 9)) / 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
  },
  borderBottom: {
    borderBottomColor: '#3d454c',
    borderBottomWidth: 2,
  },
  borderTop: {
    borderTopColor: '#3d454c',
    borderTopWidth: 2,
  },
  borderLeft: {
    borderLeftColor: '#3d454c',
    borderLeftWidth: 2,
  },
  borderRight: {
    borderRightColor: '#3d454c',
    borderRightWidth: 2,
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
          let appendStyle = []
          if (key[0] === 'C') {
            if (key[1] === '3') appendStyle.push(styles.borderRight)
            else if (key[1] === '4') appendStyle.push(styles.borderLeft)
            else if (key[1] === '6') appendStyle.push(styles.borderRight)
            else if (key[1] === '7') appendStyle.push(styles.borderLeft)
            appendStyle.push(styles.borderBottom)
          }
          else if (key[0] === 'D') {
            if (key[1] === '3') appendStyle.push(styles.borderRight)
            else if (key[1] === '4') appendStyle.push(styles.borderLeft)
            else if (key[1] === '6') appendStyle.push(styles.borderRight)
            else if (key[1] === '7') appendStyle.push(styles.borderLeft)
            appendStyle.push(styles.borderTop)
          }
          else if (key[0] === 'F') {
            if (key[1] === '3') appendStyle.push(styles.borderRight)
            else if (key[1] === '4') appendStyle.push(styles.borderLeft)
            else if (key[1] === '6') appendStyle.push(styles.borderRight)
            else if (key[1] === '7') appendStyle.push(styles.borderLeft)
            appendStyle.push(styles.borderBottom)
          }
          else if (key[0] === 'G') {
            if (key[1] === '3') appendStyle.push(styles.borderRight)
            else if (key[1] === '4') appendStyle.push(styles.borderLeft)
            else if (key[1] === '6') appendStyle.push(styles.borderRight)
            else if (key[1] === '7') appendStyle.push(styles.borderLeft)
            appendStyle.push(styles.borderTop)
          }
          else if (key[1] === '3') appendStyle.push(styles.borderRight)
          else if (key[1] === '4') appendStyle.push(styles.borderLeft)
          else if (key[1] === '6') appendStyle.push(styles.borderRight)
          else if (key[1] === '7') appendStyle.push(styles.borderLeft)

          if (this.props.selectedNumber === key) {
            isSelected = true
          }
          if (_.get(this.props.affectedIndexes, key) !== undefined) {
            // console.log(_.get(this.props.affectedIndexes, key))
            isAffected = true
          }
          return (
            <SudokuNumber
              appendStyle={appendStyle}
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
