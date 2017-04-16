import React, { Component } from "react";
import { View, Text, Platform, Dimensions, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";

import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import SudokuBoard from "../components/SudokuBoard";
import SudokuNumberButtons from "../components/SudokuNumberButtons";

class BoardScreen extends Component {
  static navigationOptions = {};

  componentWillMount() {
    StatusBar.setHidden(true);
    // this.props.generateNewGame();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topBarContainer}>
          <TopBar />
        </View>
        <View style={styles.topMenuContainer}>
          <TopMenu />
        </View>
        <View style={styles.sudokuBoardContainer}>
          <SudokuBoard />
        </View>
        <View style={styles.sudokuNumberButtonsContainer}>
          <SudokuNumberButtons />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.game.isLoading
  };
};

export default connect(mapStateToProps, null)(BoardScreen);

const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#3d454c"
  },
  topBarContainer: {
    flex: 1
  },
  topMenuContainer: {
    flex: 1
  },
  sudokuBoardContainer: {
    // height: Dimensions.get('window').width,
    // flex: 2,
    height: Dimensions.get("window").width
  },
  sudokuNumberButtonsContainer: {
    flex: 1.8
  }
};