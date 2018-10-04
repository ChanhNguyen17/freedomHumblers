import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native';
import {Container, Header, Content, Card, CardItem,
    Body, Text, Left, Button, Icon, Title, Right} from 'native-base';

import actions from '../../actions';

class Browse extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {
        const { events } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Browse</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    {events.map(event =>
                        <TouchableOpacity
                            key={event.id}
                            onPress={() => this.props.navigation.navigate('Details', { event })}
                        >
                            <Card>
                                <CardItem header bordered>
                                    <Text>{event.name.en}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>{event.description.en}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
