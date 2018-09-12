import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import actions from '../../actions';

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {
        const { events } = this.props;
        return (
            <Container>
                <Header />
                <Content padder>
                    {events.map(event =>
                        <TouchableOpacity
                            key={event._id}
                            onPress={() => this.props.navigation.navigate('Details', event)}
                        >
                            <Card>
                                <CardItem header bordered>
                                    <Text>{event.name}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>Event: {event.name}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    )}
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
