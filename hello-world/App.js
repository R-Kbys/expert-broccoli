import React,{Component} from 'react';
import { StyleSheet, Button, Text, View, TextInput, Alert, Platform} from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, width: 150}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="次にやることを入力"
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
    width: 200,
    margin: 10,
    backgroundColor: '#4169e1'
  },
});
