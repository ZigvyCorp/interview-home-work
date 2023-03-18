import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import Project from "./src/Loaders";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box flex="1">
          <Project />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
