import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/component/Navbar';
import MainApp from './src/screen/MainApp';
import TodoOpen from './src/screen/TodoOpen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
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

  let corectTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id = id) {
        todo.title = title
      }
      return todo
    }
    ))
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
  }
  if (todoId) {
    const todoIDm = todos.find(e => e.id = todoId)
    content = <TodoOpen
      value={ todoIDm }
      corectTodo={ corectTodo }
      BackTodo={ () => setTodoId(null) }
      deletTodo={ () => {
        deletTodo(todoIDm.id)
        setTodoId(null)
      } }
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
