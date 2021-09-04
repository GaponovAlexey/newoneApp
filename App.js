import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/component/Navbar';
import MainApp from './src/screen/MainApp';
import TodoOpen from './src/screen/TodoOpen';

export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    { id: '1', title: 'my favorite App' },
    { id: '2', title: 'my macbook pro' },
  ])

  const addTodo = title => {
    setTodos(e => [{
      id: Date.now().toString(),
      title
    }, ...e])
  }


  let content = (
    <MainApp todos={ todos } addTodo={ addTodo } />
  )

  if(todoId) {
    content = <TodoOpen
      BackTodo={ () => setTodoId(null)}
    />
  }

  return (
    <View>
      <Navbar />
      <View style={ styles.container }>
        { content }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
