//Zona 1: Importaciones de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button} from 'react-native';
import react, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';

//Zona 2: Main - componentes 
export default function App() {
    const [screen, setScreen] = useState('menu');
    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'componente1':
            return <Componente1 />;
        case 'menu':
        default:
        return (
            <view>
            <text>Menú de Practicas</text>
            <Button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
            <Button title="Practica Componente1" onPress={() => setScreen('componente1')} />
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