import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/component/Navbar';
import MainApp from './src/screen/MainApp';
import TodoOpen from './src/screen/TodoOpen';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';



export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'my favorite App' },
    { id: '2', title: 'my macbook pro' }
  ])

  const [loaded] = useFonts({
    'JBRegular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'JBBold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  const addTodo = title => {
    setTodos(e => [{
      id: Date.now().toString(),
      title
    }, ...e])
  }

  let corectTodo = (id, title) => {
    setTodoId(null)
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }


  let content = (
    <MainApp
      todos={ todos }
      addTodo={ addTodo }
      goOpenTodo={ setTodoId }
    />
  )

  let deletTodo = id => {
    setTodos(e => e.filter(d => d.id !== id))
    setTodoId(null)
  }
  if (todoId) {
    const todoIDm = todos.find(e => e.id == todoId)
    content = <TodoOpen
      value={ todoIDm }
      corect={ corectTodo }
      BackTodo={ () => setTodoId(null) }
      deletTodo={ () => { deletTodo(todoIDm.id) } }
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
