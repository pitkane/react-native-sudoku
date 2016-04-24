import React, {
  Component,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import sudoku from './sudoku.js'

import TopBar from './TopBar'
import TopMenu from './TopMenu'
import SudokuBoard from './SudokuBoard'
import SudokuNumberButtons from './SudokuNumberButtons'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#3d454c',
  },
  topBarContainer: {
    flex: 1,
  },
  topMenuContainer: {
    flex: 1,
  },
  sudokuBoardContainer: {
    // height: Dimensions.get('window').width,
    // flex: 2,
    height: Dimensions.get('window').width,
  },
  sudokuNumberButtonsContainer: {
    flex: 1.8,
  },
})

class MainView extends Component {

  componentWillMount() {
    StatusBar.setHidden(true)
  }

  componentDidMount() {
    const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const BOARD = {}

    for (const colItem of COLS) {
      for (const rowItem of ROWS) {
        BOARD[colItem + rowItem] = null
      }
    }
    console.log(BOARD)
    this.props.dispatch({ type: 'testing' })
    const puzzle = sudoku.generate('hard')
    const serialized = sudoku.serialize(puzzle)
    console.log(sudoku)
    console.log(puzzle)
    console.log(serialized)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topBarContainer} >
          <TopBar />
        </View>
        <View style={styles.topMenuContainer}>
          <TopMenu />
        </View>
        <View style={styles.sudokuBoardContainer} >
          <SudokuBoard />
        </View>
        <View style={styles.sudokuNumberButtonsContainer} >
          <SudokuNumberButtons />
        </View>
      </View>
    )
  }

}

MainView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}

// mapStateToProps

export default connect()(MainView)
