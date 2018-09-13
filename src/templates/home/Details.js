import React from 'react';
import {Container, Header, Content, Text, Left, Button,
    Icon, Body, Title, Right, Item, Label, Form, Input} from 'native-base';

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
                    <Form>
                        <Item floatingLabel last>
                            <Label>Name</Label>
                            <Input value={ name } onChangeText={name => this.setState({ name })}/>
                        </Item>
                    </Form>
                    <Button block style={{ margin: 15, marginTop: 50 }}>
                        <Text>Edit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default Details;
