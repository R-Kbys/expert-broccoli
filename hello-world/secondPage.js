import React, { Component, useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Alert, Platform } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

export class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      x:88,
      y:21
    }
    // const [value, onChangeText] = React.useState('次にやることを入力');
  }
  // stateはthis.setState関数で変更する
  onChangeText = value => this.setState({ value });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Your Time Manager</Text>
        <TextInput  //Input
          style = {{ height: 100, borderColor: 'gray', borderWidth: 1, width: 150 }}
          value = {this.state.value}
          onChangeText = {this.onChangeText}
          placeholder = '次にやることを入力しました'
        />
        <View style={styles.buttonContainer}>
          <Button
            title="入力"
            onPress={() => Alert.alert('入力しました')}
            color="#FFF"
          />
        </View>
        <View
    // style={}
        >

        </View>
      </View>
    );


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 35,
    width: 60,
    margin: 10,
    backgroundColor: '#4169e1'
  },
  Title: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    color: 'black',
    fontSize: 30,
  },
});