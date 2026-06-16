//Zona 1: Importaciones de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//Zona 2: Main - componentes 
export default function App() {
  return (
    <view>
        <text>Aquí va la primera practica de Componentes Nativos</text>
    </view>
    
  );
}

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