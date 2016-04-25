import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
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
    borderWidth: 1,
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
  }

  _onPressButton() {
    if (this.state.selected) {
      this.props.dispatch({ type: 'SUDOKU_SELECT_NUMBER', payload: null })
    } else {
      this.props.dispatch({ type: 'SUDOKU_SELECT_NUMBER', payload: this.props.keyId })
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        style={[styles.numberContainer, this.state.selected && styles.selected]}
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
}

export default connect()(SudokuNumber)
