import React, { Component } from "react";
import { Text, View } from "react-native";

class TopMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>
            Menu
          </Text>
        </View>
        <View style={styles.noteButton}>
          <Text style={styles.noteButtonText}>
            Note
          </Text>
        </View>
        <View style={styles.hintsButtons}>
          <Text style={styles.hintsButtonText}>
            Hints
          </Text>
        </View>
      </View>
    );
  }
}

export default TopMenu;

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff8068"
  },
  menuButton: {
    flex: 1,
    alignItems: "center"
  },
  menuButtonText: {
    color: "white",
    fontSize: 16
  },
  noteButton: {
    flex: 1,
    alignItems: "center"
  },
  noteButtonText: {
    color: "white",
    fontSize: 16
  },
  hintsButtons: {
    flex: 1,
    alignItems: "center"
  },
  hintsButtonText: {
    color: "white",
    fontSize: 16
  }
};