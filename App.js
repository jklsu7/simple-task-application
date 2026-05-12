import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Task App</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="New Task" style={styles.input} onChangeText={setTask} value={task} />
        <Button title="ADD" onPress={addTask} />
      </View>
      <FlatList data={tasks} renderItem={itemData => (
        <View style={styles.listItem}><Text>{itemData.item.value}</Text></View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50, flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  input: { borderBottomColor: 'black', borderBottomWidth: 1, width: '80%' },
  listItem: { padding: 10, backgroundColor: '#eee', marginVertical: 5 }
});
