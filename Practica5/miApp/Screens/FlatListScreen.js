import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Estudiante } from '../components/Estudiantes';

export default function FlatListScreen() {

    const estudiantes = [
        {
            id: '1',
            nombre: 'Erick',
            carrera: 'ISC'
        },

        {
            id: '2',
            nombre: 'Toño',
            carrera: 'ISC'
        },

        {
            id: '3',
            nombre: 'Javi',
            carrera: 'ISC'
        }
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Lista de estudiantes
            </Text>

            {}
            <FlatList

    
                data={estudiantes}

                renderItem={({ item }) => (

                    <Estudiante
                        nombre={item.nombre}
                        carrera={item.carrera}
                    />

                )}

                keyExtractor={(item) => item.id}

            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    card: {
        backgroundColor: '#d4f1f4',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }

});