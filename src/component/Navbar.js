import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextBold from './Ui/AppTextBold'

export default function Navbar() {
	return (
		<View style={styles.cont}>
			<AppTextBold style={ { ...styles.txt, fontFamily: 'JBBold', fontSize: 30 } }>Title</AppTextBold>
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
