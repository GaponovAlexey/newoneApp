import React, { useContext, useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import ModalWin from '../component/ModalWin'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AppButton from '../component/Ui/AppButton';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export default function TodoOpen() {
	const { todos, clearError, updateTodo } = useContext(TodoContext)
	const { todoId, changeScreen } = useContext(ScreenContext)
	const [modalID, setModa] = useState(false)

	const value = todos.find(e => e.id == todoId)

	let contents = (
		<View>
			<View style={ styles.cont }>
				<AppButton style={ styles.inp }>{ value.title }</AppButton>
				<AntDesign name='edit' size={ 35 } onPress={ () => setModa(true) } />
			</View>
			<View style={ styles.but } >
				<Ionicons name='md-chevron-back-circle-sharp' size={ 35 } onPress={ () => changeScreen(null) } />
				<MaterialCommunityIcons name='delete-forever-outline' size={ 35 } onPress={ () => {
					clearError(value.id)
					changeScreen(null)
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
