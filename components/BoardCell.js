import React, { Component } from "react";
import { Text, TouchableHighlight, Dimensions } from "react-native";
import { connect } from "react-redux";
// import { selectIndex } from '../actions/sudoku'
import * as actions from "../actions";
import _ from "lodash";

class BoardCell extends Component {
  _onPressButton = () => {
    if (!this.props.selected && this.props.original === false) {
      this.props.selectCell(this.props.id);
    }
  };

  render() {
    console.log("Rerendering cell");
    const defaultStyle = [
      styles.numberContainer,
      this.props.selected && styles.selected,
      this.props.isAffected && styles.affected
    ];
    const appendOriginal = this.props.original ? styles.original : null;
    const computedStyle = defaultStyle.concat(this.props.appendStyle);

    return (
      <TouchableHighlight onPress={this._onPressButton} style={computedStyle}>
        <Text style={[styles.textStyle, appendOriginal]}>
          {this.props.number}
        </Text>
      </TouchableHighlight>
    );
  }
}

mapStateToProps = (state, ownProps) => {
  // console.log("WUT: ", state, ownProps);
  const cell = state.board.board[ownProps.id];
  return {
    number: cell.number,
    selected: cell.selected,
    original: cell.original
  };
};

export default connect(mapStateToProps, actions)(BoardCell);

const styles = {
  numberContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: _.floor(Dimensions.get("window").width / 9),
    height: _.floor(Dimensions.get("window").width / 9),
    backgroundColor: "#dbdcdd",
    borderColor: "#7d7c7c",
    borderWidth: 1
  },
  selected: {
    backgroundColor: "#aaacb1",
    borderWidth: 1
  },
  original: {
    // textDecorationLine: "underline"
  },
  affected: {
    borderColor: "#00aca6",
    borderWidth: 1
  },
  textStyle: {
    fontSize: 24,
    color: "#3d454c",
    fontWeight: "600",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 }
  }
};
