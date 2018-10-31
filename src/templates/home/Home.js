import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Container, Header, Content, Card, CardItem,
    Body, Text, Left, Button, Icon, Title, Right, View} from 'native-base';

import actions from '../../actions';
import { colors, padding, fonts } from '../../styles/baseStyles.js'


const styles = StyleSheet.create({

//Home page image size
  imageSize: {
    width: 200,
    height: 200
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
    backgroundColor: colors.topBar
  },
//Body background color
  bodyBackground: {
    backgroundColor: colors.appBackground
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
})


class Home extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {

        return (
            <Container>
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
          <Body

          >

          <Image
          style = { [ styles.imageSize ] }

            //Home page image, this is just a test image for now.
            //PLACEHOLDER
            source={require('../../styles/img/homeImage.png')}
          />
            <Text
                style= { [ styles.sloganText ] } //styles.sloganText
            >"Feel Free 'n' Get Going"</Text>
          </Body>
          <View
            style={ [ styles.viewForButtons ] }
          >
          <View
            style={ [ styles.centering ] }
          >
              <Button
                style={ [styles.buttons, { /**marginTop: padding.homeTopButton**/ }] }
                onPress={() => this.props.navigation.navigate("Search")}>
                <Text>Search activities</Text>
              </Button>
          </View>
          <View
            style={ [ styles.centering ] }
          >
              <Button
                style={ [styles.buttons] }
                onPress={() => this.props.navigation.navigate("Browse")}>
                <Text>Browse activities</Text>
              </Button>
          </View>
          <View
            style={ [ styles.centering ] }
          >
          <Button
            style={ [styles.buttons] }
            onPress={() => this.props.navigation.navigate("Third")}>
            <Text>Maybe third here</Text>
          </Button>
          </View>
          </View>
        </Content>
      </Container>
        );
    }
}


// Redux configuration
const mapStateToProps = ({ events }) => ({ events });

const mapDispatchToProps = dispatch => {
    const { fetchEvents } = actions.eventAction;
    return bindActionCreators({ fetchEvents }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
