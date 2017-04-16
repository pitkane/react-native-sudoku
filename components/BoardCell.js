import React, { Component } from "react";
import { Text, TouchableHighlight, Dimensions } from "react-native";
import { connect } from "react-redux";
// import { selectIndex } from '../actions/sudoku'
import * as actions from "../actions";
import _ from "lodash";

class BoardCell extends Component {
  _onPressButton = () => {
    if (!this.props.selected) {
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
    const computedStyle = defaultStyle.concat(this.props.appendStyle);

    return (
      <TouchableHighlight onPress={this._onPressButton} style={computedStyle}>
        <Text style={styles.textStyle}>
          {this.props.number}
        </Text>
      </TouchableHighlight>
    );
  }
}

mapStateToProps = (state, ownProps) => {
  // console.log("WUT: ", state, ownProps);
  return {
    number: state.board.board[ownProps.id].number,
    selected: state.board.board[ownProps.id].selected
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
