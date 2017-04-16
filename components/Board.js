import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";

import BoardCell from "./BoardCell";

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

class Board extends Component {
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  renderBoard = board => {
    return _.map(board, (cell, index) => {
      console.log("Cell: ", cell);
      console.log("index: ", index);
      const row = index[0];
      const column = index[1];
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

      if (this.props.selectedIndex === index) {
        isSelected = true;
      }
      if (_.get(this.props.affectedIndexes, index) !== undefined) {
        isAffected = true;
      }
      return (
        <BoardCell
          // dispatch={this.props.dispatch}
          appendStyle={appendStyle}
          isAffected={isAffected}
          selected={isSelected}
          number={cell.number}
          key={index}
          id={index}
        />
      );
    });
  };

  render() {
    const { board } = this.props;
    console.log(board);
    return (
      <View style={styles.container}>
        {this.renderBoard(board)}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board.board,
    selectedIndex: state.board.selectedIndex,
    affectedIndexes: state.board.affectedIndexes
  };
};

export default connect(mapStateToProps, null)(Board);
