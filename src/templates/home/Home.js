import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import {Container, Header, Content,
    Body, Text, Left, Button, Icon, Title, Right, View} from 'native-base';
import { colors, padding } from '../../styles/baseStyles';

const styles = StyleSheet.create({

  homeBackgroundImage: {
      flex: 1,
      width: null,
      height: null
      //resizeMode: 'cover'
  },
//Home page image size
  imageSize: {
    width: 180,
    height: 120
  },
//Text color
  topBarTextColor: {
    color: colors.orange
  },
//Slogan styles
  sloganText: {
    color: colors.orange,
    //borderRadius: 12,
    //borderWidth: 1,
    borderColor: colors.black,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15
  },

//Top bar color
  topBar: {
    //backgroundColor: colors.topBar
  },
//Body background color
  bodyBackground: {
    //backgroundColor: colors.appBackground
  },
//Styles for buttons
  buttons: {
    backgroundColor: colors.orange,
    marginTop: padding.md
  },
//Styles for centering elements
  centering: {
    //backgroundColor: "#A1A1A1",
    //flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    //paddingLeft: padding.md
  },
//Buttons are inside view, for now, need to find best practises
  viewForButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: padding.md
  }
});

// home page
export default class Home extends React.Component {
    render() {
        return (
            <Container>
            <ImageBackground
              source={require('../../styles/img/bg_keski.jpg')}
              style={{width: '100%', height: '100%', flex: 1}}
          >
                <Header
                style= { [ styles.topBar ] }
                >
                    <Left>
                        <Button
                            transparent
                        >
                            <Icon style= { [ styles.topBarTextColor ] } name="ios-menu" />
                        </Button>

                    </Left>
                    <Body
                    style= { [ styles.centering ] }
                    >
                        <Title
                            style= { [ styles.topBarTextColor ] }
                        >Frivities</Title>
                    </Body>

                    <Right>
                    </Right>
                </Header>
        <Content padder
        style={ [styles.bodyBackground] }
        >
          <Body>
            <Image style= {[ styles.imageSize ]} source={require('../../styles/img/frivities_logo.png')} />
            <Text
                style= { [ styles.sloganText ] } //styles.sloganText
            >"Feel Free 'n' Get Going"</Text>

            <Text
                style= { [ styles.sloganText ] } //styles.sloganText
            >ALL IS FREE, WOOOOOOOOO!!!</Text>
          </Body>
          <View
            style={ [ styles.viewForButtons ] }
          >
          <View
            style={ [ styles.centering, { marginTop: 40 } ] }
          >
              <Button
                style={ [styles.buttons] }
                onPress={() => this.props.navigation.navigate("Browse")}>
                <Text>Browse activities</Text>
              </Button>
          </View>

          </View>
        </Content>
      </ImageBackground>
    </Container>
    );
    }
}
