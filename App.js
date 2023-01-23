import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';


export default function App() {

const [text, setText] = useState('');
const [data, setData] = useState([]);

const add = () => {
  setData([...data, { key: text }]);
  setText('');
}

const clear = () => {
  setData([]);
  setText('');
}

return (
  <View style={styles.container}>
    <TextInput style={styles.input} 
    onChangeText={text => setText(text)} 
    value={text} />
    <View style={styles.button}>
    <Button onPress={add} title="ADD" />
    <Button onPress={clear} title="CLEAR" />
    </View>
    <Text style={{fontSize:18, color: 'blue' }}> Shopping list </Text>
    <View style={styles.input}> 
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <Text>{item.key}</Text>
      }
    /></View>
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{ width:200, 
    borderColor:'grey', 
    borderWidth: 1
  },
  button:{
    flexDirection: 'row', 
  alignItems: 'center',
  justifyContent: 'space-between'
},

});
