import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { ModalWin } from '../component/ModalWin.js'

export default function TodoOpen({ BackTodo, value, corectTodo, deletTodo }) {
	const [todo, setTodo] = useState(value)
	const [modalID, setmodalID] = useState(false)

	let contents = (
		<View>
			<View style={ styles.cont }>
				<TextInput
					value={ todo.title }
					onChangeText={ setTodo }
					style={ styles.inp }
					placeholder="text"
				/>
				<Button color='#000' title='...' onPress={ () => setmodalID(true) } />
			</View>
			<View style={ styles.but } >
				<Button title='you back' onPress={ BackTodo } />
				<Button title='delet' onPress={ () => deletTodo(value.id) } />
			</View>
		</View>
	)

	
	if (modalID) {
		contents = <ModalWin
			onOpen={ () => setmodalID(true) }

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
		marginBottom: 4,
	},
	inp: {
		borderBottomWidth: 2,
		width: '89%',
	},
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})
