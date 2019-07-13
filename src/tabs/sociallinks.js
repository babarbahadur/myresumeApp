import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {TouchableNativeFeedback, Linking} from 'react-native'

class SocialLinks extends Component {

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
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="call" />
              <Text>0304 2344634</Text>
              <Right>
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="mail" />
              <TouchableNativeFeedback onPress={() => Linking.openURL('https://google.com')}>
              <Text>babar.bahadur@hotmail.com</Text>
              </TouchableNativeFeedback>
              <Right>
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-github" />
              <TouchableNativeFeedback onPress={() => Linking.openURL('https://github.com/babarbahadur')}>
              <Text>github.com/babarbahadur</Text>
              </TouchableNativeFeedback>
              <Right>
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-linkedin" />
              <TouchableNativeFeedback onPress={() => Linking.openURL('https://linkedin.com/in/babarbahadur')}>
              <Text>linkedin.com/in/babarbahadur</Text>
              </TouchableNativeFeedback>
              <Right>
              </Right>
             </CardItem>

           </Card>
        </Content>
      </Container>
    );
  }
}

export default SocialLinks;