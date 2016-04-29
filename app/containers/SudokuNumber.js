import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
// import { connect } from 'react-redux'
import { selectIndex } from '../actions/sudoku'
// import * as SudokuActions from '../actions/sudoku'
import _ from 'lodash'

const styles = StyleSheet.create({
  numberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: _.floor(Dimensions.get('window').width / 9),
    height: _.floor(Dimensions.get('window').width / 9),
    backgroundColor: '#dbdcdd',
    borderColor: '#7d7c7c',
    borderWidth: 1,
  },
  selected: {
    backgroundColor: '#aaacb1',
    borderWidth: 1,
  },
  affected: {
    borderColor: '#00aca6',
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 24,
    color: '#3d454c',
    fontWeight: '600',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
  },
})

class SudokuNumber extends Component {

  constructor(props) {
    super(props)
    this._onPressButton = this._onPressButton.bind(this)

    this.state = {
      number: props.number,
      selected: false,
      isAffected: false,
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    // console.log('RECEIVING PROPS')
    this.setState({ number: nextProps.number })

    if (nextProps.selected) {
      this.setState({ selected: true })
    } else {
      this.setState({ selected: false })
    }
    if (nextProps.isAffected) {
      this.setState({ isAffected: true })
    } else {
      this.setState({ isAffected: false })
    }
  }

  _onPressButton() {
    if (this.state.selected) {
      this.props.dispatch({ type: 'SUDOKU_CLEAR_SELECTION' })
    } else {
      // this.setState({ selected: true })
      // this.setState({ selected: true })
      this.props.dispatch(selectIndex(this.props.keyId))
      // this.props.dispatch({ type: 'SUDOKU_CLEAR_SELECTION' })

      // this.props.dispatch({ type: 'SUDOKU_SELECT_NUMBER', payload: this.props.keyId })
      // this.props.dispatch(SudokuActions.selectNumber(this.props.keyId))
      // this.setState({ selected: true })
      // this.props.dispatch(SudokuActions.selectIndex(this.props.keyId))
      // .then(() => {
      //   this.props.dispatch(SudokuActions.updateAffected(this.props.keyId))
      // })
      // this.props.dispatch({ type: 'SUDOKU_SELECT_INDEX', payload: this.props.keyId })
      // this.props.dispatch(SudokuActions.updateAffected(this.props.keyId))
    }
  }

  render() {
    const defaultStyle = [
      styles.numberContainer,
      this.state.selected && styles.selected,
      this.state.isAffected && styles.affected,
    ]
    const computedStyle = defaultStyle.concat(this.props.appendStyle)

    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        style={computedStyle}
      >
        <Text style={styles.textStyle}>
          {this.state.number}
        </Text>
      </TouchableHighlight>
    )
  }
}

SudokuNumber.propTypes = {
  dispatch: React.PropTypes.func,
  number: React.PropTypes.string,
  selected: React.PropTypes.bool,
  keyId: React.PropTypes.string,
  isAffected: React.PropTypes.bool,
  appendStyle: React.PropTypes.array,
}

export default SudokuNumber
