import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function ModalWin({ back, visible, title, corect }) {
<<<<<<< HEAD
	const [corTitle, setCorTitle] = useState(title)

	return (

		<Modal visible={ visible }>
			<TextInput
				value={ corTitle }
				onChangeText={ setCorTitle }
				placeholder='text'
				style={ styles.inp }
			/>
			<View style={ styles.but } >
				<Button title='back' onPress={ back } />
				<Button title='corect' onPress={ () => corect(corTitle) } />
=======
  const [corTitle, setCorTitle] = useState(title)

  return (

    <Modal visible={ visible }>
      <TextInput
        value={ corTitle }
        onChangeText={ setCorTitle }
        placeholder='text'
        style={ styles.inp }
      />
      <View style={ styles.but } >
        <Ionicons name='md-chevron-back-circle-sharp' size={ 35 } onPress={ back } />
        <FontAwesome name="save" size={ 35 } color="black" onPress={ () => corect(corTitle) } />
>>>>>>> 8d2c8ef980988e4838859493871b1e0fbee65984

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inp: {
    padding: 15,
    backgroundColor: '#eee',
    elevation: 11,
    marginBottom: 11,
  },
  but: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
