//Zona 1: Importaciones de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button} from 'react-native';
import react, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import ScrollView_SafeAreaView from './ScrollView_SafeAreaView';
import Pressable from './Pressable';
import SwitchScreen from './SwitchScreen';

//Zona 2: Main - componentes 
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
            return <Pressable />;
        case 'switch':
            return <SwitchScreen />;
        case 'menu':
        default:
        return (
            <view>
            <text>Menú de Practicas</text>
            <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
            <Button title="Practica Componente1" onPress={() => setScreen('componente1')} />
            <Button title="Practica ScrollView_SafeAreaView" onPress={() => setScreen('ScrollView_SafeAreaView')} />
            <Button title="Practica Pressable" onPress={() => setScreen('Pressable')} />
            <Button title="Practica Switch" onPress={() => setScreen('switch')} />
            </view>
    
  ); //return 
  } //switch
} //funcion

//Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});