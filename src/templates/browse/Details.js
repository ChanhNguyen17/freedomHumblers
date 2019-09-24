import React from 'react';
import {
    Container, Header, Content, Text, Left, Button,
    Icon, Body, Title, Right, CardItem, Card} from 'native-base';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import get from 'lodash/get';

import { colors, padding, fonts } from '../../styles/baseStyles';

const styles = StyleSheet.create({

//Top bar color
  topBar: {
    backgroundColor: colors.topBar
  },
//Top bar text color
  topBarTextColor: {
    color: colors.orange
  }
});

// show details of the event
class Details extends React.Component {
    render() {
        const { name, description, images } = this.props.navigation.getParam('event');
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
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title style= { [ styles.topBarTextColor ] }>{ name.en || name.fi || 'No name' }</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header bordered style= { [ styles.topBar ] }>
                            <Text style= { [ styles.topBarTextColor ] }>{get(name, 'en') || get(name, 'fi') || 'No name'}</Text>
                        </CardItem>
                        {/*<CardItem cardBody>
                            <Image source={ images[0].url ? {uri: images[0].url} : require('../../styles/img/placeholder.png'  ) }
                            style={{height: 200, width: 50, flex: 1}} />
                        </CardItem>
                        */}
                        <CardItem>
                            <Body>
                                <Text>{get(description, 'en') || get(description, 'fi') || 'No description'}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
        </ImageBackground>
            </Container>
        );
    }
}
export default Details;
