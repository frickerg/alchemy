import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./CustomProperties/Theme";

import MainScreen from "./Screens/MainScreen";
import TopBar from "./Components/TopBar";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TopBar/>
      <MainScreen/>
    </PaperProvider>
  );
}
