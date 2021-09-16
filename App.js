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