import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Button
} from "react-native";

import startMainTabs from "../tabs/startMainTabs"

class MainScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableNativeFeedback onPress={this.loginHandler}>
          <View >
            <Image
              source={require("/Users/babar/React Native/myresume/src/images/resumeicon.png")}
              style={styles.iconStyle}
              
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 250,
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },

  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFFEFF"
  }
});

export default MainScreen;
