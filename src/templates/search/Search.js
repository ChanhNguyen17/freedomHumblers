import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, StyleSheet, TextInput, ImageBackground, Image } from 'react-native';
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
    //backgroundColor: colors.appBackground
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

class Search extends React.Component {
    componentWillMount(){
        this.props.fetchPlaces();
    }
    render() {
        const { places } = this.props;
        return (
        <ImageBackground source={require('../../styles/img/bg_keski.jpg')} style={{width: '100%', height: '100%'}}>
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
                        <Title style= { [ styles.topBarTextColor ] }>Search</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
        <Content padder style={ [styles.bodyBackground] }>
          <Body>
            <Text>Search activities by places</Text>
          </Body>
            {places.map(place =>
                <TouchableOpacity
                    key={place.id}
                    onPress={() => {
                        this.props.fetchEvents(place.id);
                        this.props.navigation.state.params.setPlace(
                            place.divisions.filter(({ type }) => type === 'sub_district')[0].name.fi
                        );
                        this.props.navigation.goBack();
                    }}
                >
                    <Card>
                        <CardItem>
                            <Body>

                            <Text>{place.divisions.filter(({ type }) => type === 'sub_district')[0].name.fi}</Text>

                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            )}
        </Content>
      </Container>
  </ImageBackground>
        );
    }
}

// Redux configuration
const mapStateToProps = ({ places }) => ({ places });

const mapDispatchToProps = dispatch => {
    const { fetchPlaces } = actions.placeAction;
    const { fetchEvents } = actions.eventAction;
    return bindActionCreators({ fetchEvents, fetchPlaces }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
