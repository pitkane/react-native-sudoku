import React, { Component } from "react";
import { Text, View } from "react-native";

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>
            III
          </Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeText}>
            1:38
          </Text>
        </View>
        <View style={styles.loveButton}>
          <Text style={styles.loveButtonText}>
            {`<3`}
          </Text>
        </View>
      </View>
    );
  }
}

export default TopBar;

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3d454c"
  },
  menuButton: {
    flex: 1,
    alignItems: "center"
  },
  menuButtonText: {
    color: "white",
    fontSize: 18
  },
  time: {
    flex: 1,
    alignItems: "center"
  },
  timeText: {
    color: "white",
    fontSize: 18
  },
  loveButton: {
    flex: 1,
    alignItems: "center"
  },
  loveButtonText: {
    color: "white",
    fontSize: 18
  }
};
