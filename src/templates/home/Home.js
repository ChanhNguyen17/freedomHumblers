import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native';
import {Container, Header, Content, Card, CardItem,
    Body, Text, Left, Button, Icon, Title, Right, View} from 'native-base';

import actions from '../../actions';

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                        >
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>FreeVities</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
        <Content padder>
          <Body>
            <Text>FreeVities</Text>
          </Body>
          <Button full rounded primary
            style={{ marginTop: 180 }}
            onPress={() => this.props.navigation.navigate("Search")}>
            <Text>Search activities</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Browse")}>
            <Text>Browse activities</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Third")}>
            <Text>Maybe third here</Text>
          </Button>
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
