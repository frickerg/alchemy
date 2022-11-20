import MainScreen from './Screens/MainScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import TopBar from './Components/TopBar';
import theme from './CustomProperties/Theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TopBar />
      <MainScreen />
    </PaperProvider>
  );
}
