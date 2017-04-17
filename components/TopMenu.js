import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";

class TopMenu extends Component {
  drawerOpen = () => {
    console.log(this.props);
    this.props.navigation.navigate("DrawerOpen");
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.ButtonContainer}>
          <TouchableHighlight
            onPress={this.drawerOpen}
            style={styles.ButtonTouchable}
          >
            <Text style={styles.ButtonText}>Menu</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>
            Note
          </Text>
        </View>

        <View style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>
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
  ButtonContainer: {
    flex: 1,
    alignItems: "center"
  },
  ButtonTouchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  ButtonText: {
    color: "white",
    fontSize: 16
  }
};
