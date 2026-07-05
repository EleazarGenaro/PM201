import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./Screens/SplashScreen";
import HomeScreen from "./Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);
  }, []);

  if (mostrarSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registro de Libros"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}