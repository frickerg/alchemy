import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1bbc9c",
    accent: "#4169E1",
    favorite: "#BADA55",
    cancelButton: "#a4c639",
    iconColor: "#808080",
  },
};

export default theme;
