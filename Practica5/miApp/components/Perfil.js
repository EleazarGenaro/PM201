import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre, style }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[estilos.tarjeta, style]}>
            <Text style={estilos.nombre}>{nombre}</Text>

            {mostrar && (
                <>
                    <Text style={estilos.carrera}>{carrera}</Text>
                    <Text style={estilos.otroTexto}>{materia}</Text>
                    <Text style={estilos.otroTexto}>{cuatrimestre}</Text>
                </>
            )}

            <Button
                title="Ver Perfil"
                onPress={() => setMostrar(!mostrar)}
            />
        </View>
    );
};

const estilos = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    carrera: {
        fontSize: 18,
        color: 'gray',
        fontFamily: 'Roboto',
    },
    otroTexto: {
        fontSize: 16,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 10,
        margin: 10,
    },
});