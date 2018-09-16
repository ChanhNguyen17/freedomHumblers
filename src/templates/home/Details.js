import React from 'react';
import {
    Container, Header, Content, Text, Left, Button,
    Icon, Body, Title, Right, CardItem, Card
} from 'native-base';

class Details extends React.Component {
    constructor(props){
        super(props);
        const event = props.navigation.getParam('event');
        this.state = {
            event,
            name: event.name
        }
    }
    render() {
        const { event, name } = this.state;
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
                    <Title>{ event.name }</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
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
                </Content>
            </Container>
        );
    }
}
export default Details;
