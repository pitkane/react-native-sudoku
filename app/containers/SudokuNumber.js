import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import * as SudokuActions from '../actions/sudoku'
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
    borderWidth: 2,
  },
  textStyle: {
    fontSize: 18,
  },
})

class SudokuNumber extends Component {

  constructor(props) {
    console.log()
    super(props)
    this._onPressButton = this._onPressButton.bind(this)

    this.state = {
      selected: false,
      isAffected: false,
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
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
      // this.props.dispatch({ type: 'SUDOKU_SELECT_NUMBER', payload: this.props.keyId })
      this.props.dispatch(SudokuActions.selectNumber(this.props.keyId))
    }
  }

  render() {

    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        style={[styles.numberContainer, this.state.selected && styles.selected, this.state.isAffected && styles.affected]}
      >
        <Text style={styles.textStyle}>
          {this.props.number}
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
}

export default connect()(SudokuNumber)
