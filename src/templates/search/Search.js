import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {Container, Header, Content, Card, CardItem,
    Body, Text, Left, Button, Icon, Title, Right, View} from 'native-base';

import actions from '../../actions';
import { colors, padding, fonts } from '../../styles/baseStyles.js'


const styles = StyleSheet.create({
//Top bar color
  topBar: {
    backgroundColor: colors.topBar
  },
//Body background color
  bodyBackground: {
    backgroundColor: colors.appBackground
  },
//Text color
  topBarTextColor: {
    color: colors.orange
  },
  buttons: {
    backgroundColor: colors.orange,
    marginTop: padding.md
  },
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

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {

        return (
            <Container>
                <Header style= { [ styles.topBar ] } >
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon style= { [ styles.topBarTextColor ] } name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style= { [ styles.topBarTextColor ] } >Search</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
        <Content padder style={ [styles.bodyBackground] }>
          <Body>
            <Text>Use a keyword to search activities</Text>
          </Body>
          <View
            style={ [ styles.viewForButtons ] }
          >
          <View
            style={ [ styles.centering ] }
          >
            <TextInput
            //style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "keyword"

               autoCapitalize = "none"
               //onChangeText = {this.handleSearch}
               />
              <Button
                style={ [styles.buttons] }
                onPress={() => this.props.navigation.navigate("Search")}>
                <Text>Search</Text>
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
