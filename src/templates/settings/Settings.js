import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Settings extends React.Component
{
    render()
    {
        return (
            <View>
                <Text>Welcome to Settings Page</Text>
            </View>
        );
    }
}

// Redux configuration
function mapStateToProps(state) {
    return {
        events: state.events
    };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
