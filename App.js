import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
Alert,
TouchableWithoutFeedback,
Keyboard
} from 'react-native';
// import WelcomScreen from './app/screen/WelcomScreen';
import Header from './app/screen/Header';
import TodoItem from './app/screen/todoItem';
import AddTodo from './app/screen/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {

    if (text.length > 3){

      setTodos((prevTodos) => {
        return [
          {
            text: text,
            key: Math.random().toString(),
          },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert('OOPS', 'todos must be atleast 4 characters long', [
        {text: 'Sure myan', onPress: () => console.log('alert closed')}
      ])
    }
  };

  return (
    <TouchableWithoutFeedback 
    onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard closed ');
    }}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}  />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  content: {
    paddingTop: 40,
    paddingHorizontal: 30,

  }
});
