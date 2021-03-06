import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import {Container, Header, Content, Card, CardItem,
    Body, Text, Left, Button, Icon, Title, Right, View} from 'native-base';
import get from 'lodash/get';

import actions from '../../actions';
import { colors, padding, fonts } from '../../styles/baseStyles';

const styles = StyleSheet.create({

//Top bar color
  topBar: {
    backgroundColor: colors.topBar
  },
//Top bar text color
  topBarTextColor: {
    color: colors.orange
  },
//Body background color
  bodyBackground: {
    //backgroundColor: colors.appBackground
  }
});


class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { place: 'All' };
    }
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {
        const { events } = this.props;
        return (
            <Container>
            <ImageBackground source={require('../../styles/img/bg_keski.jpg')} style={{width: '100%', height: '100%'}}>
                <Header
                style= { [ styles.topBar ] }
                >
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon style= { [ styles.topBarTextColor ] } name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title
                        style= { [ styles.topBarTextColor ] }
                        >Browse {this.state.place}</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('Search', {
                                setPlace: place => this.setState({ place })
                            })}
                        >
                            <Icon style= { [ styles.topBarTextColor ] } name='ios-search' />
                        </Button>
                    </Right>
                </Header>
                <Content padder
                style={ [styles.bodyBackground] }
                >
                    {events.map(event =>
                        <TouchableOpacity
                            key={event.id}
                            onPress={() => this.props.navigation.navigate('Details', { event })}
                        >
                            <Card>
                                <CardItem header bordered
                                style= { [ styles.topBar ] }
                                >
                                    <Text
                                    style= { [ styles.topBarTextColor ] }
                                    >{get(event.name, 'en') || get(event.name, 'fi') || 'No name'}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text numberOfLines={5}>{get(event.description, 'en') || get(event.description, 'fi') || 'No description'}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    )}
                </Content>
            </ImageBackground>
            </Container>
        );
    }
}

// Redux configuration mapStateToProps and mapDispatchToProps
const mapStateToProps = ({ events }) => ({ events });

const mapDispatchToProps = dispatch => {
    const { fetchEvents } = actions.eventAction;
    return bindActionCreators({ fetchEvents }, dispatch);
};

// connect redux to component
export default connect(mapStateToProps, mapDispatchToProps)(Browse);
