// Zona 1: Importaciones de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState } from 'react';

import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import ScrollView_SafeAreaView from './ScrollView_SafeAreaView';
import PressableScreen from './Pressable';
import SwitchScreen from './SwitchScreen';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import ComponentesNativosScreen from './ComponentesNativosScreen';

// Zona 2: Main - componentes
export default function App() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'componente1':
      return <Componente1 />;

    case 'ScrollView_SafeAreaView':
      return <ScrollView_SafeAreaView />;

    case 'Pressable':
      return <PressableScreen />;

    case 'switch':
      return <SwitchScreen />;

    case 'FlatListScreen':
      return <FlatListScreen />;

    case 'SectionListScreen':
      return <SectionListScreen />;

    case 'ComponentesNativosScreen':
      return <ComponentesNativosScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Text style={styles.titulo}>Menú de Prácticas</Text>

          <View style={styles.boton}>
            <Button
              title="Practica Tarjetas"
              onPress={() => setScreen('tarjetas')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica Componente1"
              onPress={() => setScreen('componente1')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica ScrollView_SafeAreaView"
              onPress={() => setScreen('ScrollView_SafeAreaView')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica Pressable"
              onPress={() => setScreen('Pressable')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica Switch"
              onPress={() => setScreen('switch')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica FlatList"
              onPress={() => setScreen('FlatListScreen')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica SectionList"
              onPress={() => setScreen('SectionListScreen')}
            />
          </View>

          <View style={styles.boton}>
            <Button
              title="Practica Componentes Nativos"
              onPress={() => setScreen('ComponentesNativosScreen')}
            />
          </View>
        </View>
      );
  }
}

// Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  boton: {
    width: '80%',
    marginVertical: 8,
  },
});