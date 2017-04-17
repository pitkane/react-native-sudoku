import Expo from "expo";
import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import BoardScreen from "./screens/BoardScreen";

class App extends Component {
  render() {
    const MainNavigator = DrawerNavigator(
      {
        board: { screen: BoardScreen }
      } // ,
      // { headerMode: "none" }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
};

Expo.registerRootComponent(App);
