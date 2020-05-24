import React,{Component,useState} from 'react';
import { StyleSheet, Button, Text, View, TextInput, Alert, Platform} from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('次にやることを入力');

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Your Time Manager</Text> //title
      <TextInput  //Input
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, width: 150}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <View style={styles.buttonContainer}> //Button
        <Button
          title="入力"
          onPress={() => Alert.alert('入力しました')}
          color="#FFF"
        />
      </View>
    </View>
  );
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
