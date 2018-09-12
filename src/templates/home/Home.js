import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
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
                    {events.map(({ _id, name }) =>
                        <Card key={_id}>
                            <CardItem header bordered>
                                <Text>{name}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Event: {name}</Text>
                                </Body>
                            </CardItem>
                        </Card>
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
