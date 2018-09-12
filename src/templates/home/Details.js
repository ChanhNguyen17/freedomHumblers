import React from 'react';
import { Container, Header, Content, Text } from 'native-base';

class Details extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Text>Welcome to details view</Text>
                </Content>
            </Container>
        );
    }
}
export default Details;
