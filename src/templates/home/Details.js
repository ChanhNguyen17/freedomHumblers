import React from 'react';
import {
    Container, Header, Content, Text, Left, Button,
    Icon, Body, Title, Right, CardItem, Card
} from 'native-base';

class Details extends React.Component {
    render() {
        const { name, description } = this.props.navigation.getParam('event');
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
                    <Title>{ name.en }</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>{name.en}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>{description.en}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default Details;
