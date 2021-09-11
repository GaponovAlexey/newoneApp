import React from 'react';
import { View } from 'react-native';

import { useFonts } from 'expo-font';
import MainPayload from './src/MainPayload';
import TodoState from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState';



export default function App() {
  const [loaded] = useFonts({
    'JBRegular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'JBBold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
  })

  if (!loaded) { return null }

  return (
    <ScreenState >
      <TodoState >
        <MainPayload />
      </TodoState >
    </ScreenState>
  );
}
