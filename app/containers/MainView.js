import React, {
  Component,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import { generateGame } from '../actions/sudoku'

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
    this.props.dispatch(generateGame())
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
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
  dispatch: React.PropTypes.func,
  isLoading: React.PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.sudoku.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainView)
