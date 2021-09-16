import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import ModalWin from '../component/ModalWin'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScreenContext } from '../context/changeScreen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

export default function TodoOpen() {
	const [modalID, setModa] = useState(false)
	const { todoId, setTodoId } = useContext(ScreenContext)
	const { todos, updateTodo, removeTodo } = useContext(TodoContext)
	const todo = todos.find(e => e.id == todoId)

	const oncorect = (title) => {
		updateTodo(todo.id, title)
		setModa(false)
	}

	let contents = (
		<View>
			<View style={ styles.cont }>
				<Text style={ styles.inp }>{ todo.title }</Text>
				<AntDesign name='edit' size={ 35 } onPress={ () => setModa(true) } />
			</View>
			<View style={ styles.but } >
				<Ionicons name='md-chevron-back-circle-sharp' size={ 35 } onPress={ () => setTodoId(null) } />
				<MaterialCommunityIcons name='delete-forever-outline' size={ 35 } onPress={ () => {
					removeTodo(todo.id),
						setTodoId(null)
					} } />
			</View>
		</View>
	)

	const backSave = (title) => {
		updateTodo(value.id, title),
		setModa(false)
	}

	if (modalID) {
		contents = <ModalWin
			title={ value.title }
			back={ () => setModa(false) }
			visible={ modalID }
			corect={ backSave }

		/>
	}

	return (
		<View>
			{ contents }
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	inp: {
		borderBottomWidth: 1,
		fontSize: 30,
	},
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		//width: Dimensions.get('window').width / 3
		//width: Dimensions.get('window').width / 

	}
})
