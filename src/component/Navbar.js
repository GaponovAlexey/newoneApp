import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navbar() {
	return (
		<View style={styles.cont}>
			<Text style={styles.txt}>Title</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		padding: 15,
		backgroundColor: '#eee',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	txt: {
		fontSize: 30,
	}
})
