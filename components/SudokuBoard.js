import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";

import SudokuNumber from "./SudokuNumber";

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: (Dimensions.get("window").width -
      _.floor(Dimensions.get("window").width / 9) * 9) /
      2
  },
  borderBottom: {
    borderBottomColor: "#3d454c",
    borderBottomWidth: 2
  },
  borderTop: {
    borderTopColor: "#3d454c",
    borderTopWidth: 2
  },
  borderLeft: {
    borderLeftColor: "#3d454c",
    borderLeftWidth: 2
  },
  borderRight: {
    borderRightColor: "#3d454c",
    borderRightWidth: 2
  }
};

class SudokuBoard extends Component {
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const board = this.props.board;
    return (
      <View style={styles.container}>
        {Object.keys(board).map(key => {
          const row = key[0];
          const column = key[1];
          let isSelected = false;
          let isAffected = false;
          let appendStyle = [];

          if (row === "C" || row === "D" || row === "F" || row === "G") {
            if (row === "C" || row === "F") {
              appendStyle.push(styles.borderBottom);
            } else {
              appendStyle.push(styles.borderTop);
            }
          }

          if (column === "3" || column === "6")
            appendStyle.push(styles.borderRight);
          else if (column === "4" || column === "7")
            appendStyle.push(styles.borderLeft);

          if (this.props.selectedIndex === key) {
            isSelected = true;
          }
          if (_.get(this.props.affectedIndexes, key) !== undefined) {
            isAffected = true;
          }
          return (
            <SudokuNumber
              dispatch={this.props.dispatch}
              appendStyle={appendStyle}
              isAffected={isAffected}
              selected={isSelected}
              number={board[key]}
              key={key}
              keyId={key}
            />
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    selectedIndex: state.board.selectedIndex,
    affectedIndexes: state.board.affectedIndexes
  };
};

export default connect(mapStateToProps, null)(SudokuBoard);
