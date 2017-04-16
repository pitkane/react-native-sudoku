import React, { Component } from "react";
import { Text, TouchableHighlight, Dimensions, View } from "react-native";
import { connect } from "react-redux";
// import { insertNumber, clearSelection } from "../actions/sudoku";

const topRow = ["1", "2", "3", "4", "5"];
const bottomRow = ["6", "7", "8", "9", "X"];

class NumberButtons extends Component {
  _onNumberPress = number => {
    if (this.props.selectedIndex !== null) {
      // this.props.dispatch(insertNumber(number))
      // this.props.dispatch(clearSelection())
    }
  };

  renderNumber(number) {
    return (
      <TouchableHighlight
        key={number}
        style={styles.numberContainer}
        onPress={this._onNumberPress(number)}
      >
        <Text style={styles.numberText}>
          {number}
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          {topRow.map(item => {
            return this.renderNumber(item);
          })}
        </View>
        <View style={styles.bottomRow}>
          {bottomRow.map(item => {
            return this.renderNumber(item);
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedIndex: state.board.selectedCell
  };
};

export default connect(mapStateToProps, null)(NumberButtons);

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#00aca6"
  },
  topRow: {
    flex: 1,
    flexDirection: "row"
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row"
  },
  numberContainer: {
    width: Dimensions.get("window").width / 5,
    alignItems: "center",
    justifyContent: "center"
  },
  numberText: {
    fontWeight: "600",
    fontSize: 24,
    color: "white"
  }
};
