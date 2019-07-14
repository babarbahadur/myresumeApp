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

              <ScrollView>
              <View style={styles.ButtonViewStyle}>
                <Container>
                  <Content>
                    <Button transparent info>
                      <Text>Key Skills</Text>
                    </Button>
                  </Content>
                </Container>
              </View>

              <View style={styles.buttonStyle}>
                <CustomButton>HTML</CustomButton>
                <CustomButton>C#</CustomButton>
                <CustomButton>C++</CustomButton>
                <CustomButton>C</CustomButton>
                <CustomButton>Selenium Framwork</CustomButton>
                <CustomButton>React Native</CustomButton>
                <CustomButton>Javascript</CustomButton>
                <CustomButton>CSS</CustomButton>
              </View>

              <View style={styles.ButtonViewStyle}>
                <Container>
                  <Content>
                    <Button transparent info>
                      <Text>Key Platforms</Text>
                    </Button>
                  </Content>
                </Container>
              </View>

              <View style={styles.buttonStyle}>
                <CustomButton>Photoshop</CustomButton>
                <CustomButton>Postman</CustomButton>
                <CustomButton>Netbeans</CustomButton>
                <CustomButton>Eclipse</CustomButton>
                <CustomButton>Android Studio</CustomButton>
                <CustomButton>Visual Studio</CustomButton>
                <CustomButton>VS Code</CustomButton>
              </View>

            </ScrollView>


            </Content>
          </Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 200,
    height: 200,
    borderRadius: 100
  },

  ImageViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  buttonStyle: {
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    //flexDirection: "row-reverse",
    justifyContent: "space-evenly"
  },

  mainView: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "center"
  },

  contentViewStyle: {
    flex: 1
  },

  buttonStyle2: {
    alignItems: "center"
  },

  ButtonViewStyle: {
    width: "100%",
    height: 50
  }
});

export default ResumeScreen;
