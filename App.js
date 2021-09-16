<<<<<<< HEAD
import React, { useState } from 'react';
import { ScreenState } from './src/context/changeScreen/ScreenState';
import { TodoState } from './src/context/todo/TodoState';
import MainLayout from './src/MainLayout';

export default function App() {
  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
=======
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
>>>>>>> 8d2c8ef980988e4838859493871b1e0fbee65984
