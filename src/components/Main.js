import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { logoutUser } from '../actions';

class Main extends Component {
  onButtonPress() {
    this.props.logoutUser();
  }

  render() {
    console.log('Hello to Main Screen');
    const { userem } = this.props;
      return (
        <View>
          <Card>
            <CardSection>
              <Text style={styles.textStyle}>
              Your Email is { userem }.
              </Text>
            </CardSection>
            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)} >
                Logout
              </Button>
            </CardSection>
          </Card>
        </View>
      );
    }
  }
  const mapStateToProps = ({ auth }) => {
    const { userem } = auth;
    return {
      userem
    };
  };

  const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
  };
export default connect(mapStateToProps, { logoutUser })(Main);
