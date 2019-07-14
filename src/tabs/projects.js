import React, { Component } from 'react';
import { Image, TouchableNativeFeedback, Linking} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

class Projects extends Component {

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
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.sclance.com/pngs/code-icon-png/code_icon_png_296525.jpg'}} />
                <Body>
                  <Text>Oreobit Blockchain</Text>
                  <Text note>Final Year Project</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.mhlnews.com/sites/mhlnews.com/files/styles/article_featured_retina/public/blockchain_2.gif?itok=skdt98tS'}} style={{height: 200, width: '99%', flex: 1}}/>
                <Text>
                I made my final year project on Blockchain Technology. We built a new Blockchain on Python langauage. Which fulfilled the core concepts of an immutable ledger. We could mine a block and can do transactions between the nodes
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <TouchableNativeFeedback onPress={() => Linking.openURL('https://github.com/babarbahadur/helloworld')}>
                  <Text>https://github.com/babarbahadur/helloworld</Text>
                  </TouchableNativeFeedback>
                </Button>
               
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.sclance.com/pngs/code-icon-png/code_icon_png_296525.jpg'}} />
                <Body>
                  <Text>TODO App</Text>
                  <Text note>Todo Application</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../images/todologo.png')} style={{height: 200, width:'99%', flex: 1}}/>
                <Text>
                Its an application in which user can enter daily Todo and if there is something that user wants to note user can also note it by switching to node tab. Since todos and note may be confidential so user needs to login and would be authenticated via Firebase
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <TouchableNativeFeedback onPress={() => Linking.openURL('https://github.com/babarbahadur/TODO')}>
                  <Text>https://github.com/babarbahadur/TODO</Text>
                  </TouchableNativeFeedback>
                </Button>
               
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Projects