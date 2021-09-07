import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import ModalWin from '../component/ModalWin'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TodoOpen({ BackTodo, value, corect, deletTodo, back }) {
	const [todo, setTodo] = useState(value)
	const [modalID, setModa] = useState(false)

	const oncorect = (title) => {
		corect(value.id, title)
		setModa(false)
	}

	let contents = (
		<View>
			<View style={ styles.cont }>
				<Text style={ styles.inp }>{ value.title }</Text>
				<AntDesign name='edit' size={ 35 } onPress={ () => setModa(true) } />
			</View>
			<View style={ styles.but } >
				<Ionicons name='md-chevron-back-circle-sharp' size={ 35 } onPress={ BackTodo } />
				<MaterialCommunityIcons name='delete-forever-outline' size={ 35 } onPress={ () => deletTodo(value.id) } />
			</View>
		</View>
	)


	if (modalID) {
		contents = <ModalWin
			title={ todo.title }
			back={ () => setModa(false) }
			visible={ modalID }
			corect={ oncorect }

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
		backgroundColor: '#eee',
		borderRadius: 5,
		fontSize: 27,
		width: '89%',
		justifyContent: 'flex-end',
	},
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})
