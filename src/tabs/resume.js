import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import {
  Container,
  Content,
  Accordion,
  Thumbnail,
  Text,
  Button
} from "native-base";
import CustomButton from "../UI/customButton";

const dataArray = [
  {
    title: "Objectives",
    content:
      "I am a passionate Software Engineer and want to pursue my career in Mobile Application Development / Software Testing. I want to work in an organization where I can apply my knowledge and can grow professionally."
  },
  {
    title: "Education",
    content:
      "-Bachelors of Software Engineering from Mohammad Ali Jinnah University | CGPA 2.90                                  -FSc (Pre Engineering) from Sindh Muslim Government Science College | Percentage: 70%        -Matric from VM Public School | Perecentage: 80%"
  },

  {
    title: "Work Experience",
    content: "Office Assistant, Head Start School System 07/2015 - 05/2019"
  }
];

class ResumeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.ImageViewStyle}>
          <Image
            source={require("/Users/babar/React Native/myresume/src/images/myimage.jpg")}
            style={styles.iconStyle}
          />
        </View>

        <View style={styles.contentViewStyle}>
          <Container>
            <Content padder>
              <Accordion
                dataArray={dataArray}
                headerStyle={{ backgroundColor: "#b7daf8" }}
                contentStyle={{ backgroundColor: "#ddecf8" }}
              />

              <View style={styles.buttonStyle}>
                <CustomButton>CSS</CustomButton>
                <CustomButton>HTML</CustomButton>
                <CustomButton>React Native</CustomButton>
                <CustomButton>Javascript</CustomButton>
              </View>
              <View style={styles.buttonStyle}>
                <CustomButton>C#</CustomButton>
                <CustomButton>C++</CustomButton>
                <CustomButton>C</CustomButton>
                <CustomButton>Selenium Framwork</CustomButton>
              </View>
            </Content>
          </Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: "center"
  },

  ImageViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    borderColor: "red",
    borderRadius: 50,
    paddingTop: 20,
    paddingLeft: 130
  },

  buttonStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },

  mainView: {
    flex: 1
  },

  contentViewStyle: {
    flex: 1
  },

  buttonStyle2: {
    alignItems: "center"
  }
});

export default ResumeScreen;
