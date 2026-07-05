import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  ImageBackground,
  Alert,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

export default function HomeScreen() {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");

  const [libros, setLibros] = useState([]);

  const [loading, setLoading] = useState(false);

  const agregarLibro = () => {

    // Oculta el teclado al presionar el botón
    Keyboard.dismiss();

    if (titulo === "" || autor === "" || genero === "") {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo,
        autor,
        genero
      };

      setLibros([...libros, nuevoLibro]);

      setTitulo("");
      setAutor("");
      setGenero("");

      setLoading(false);

      Alert.alert("Correcto", "Libro agregado correctamente");

    }, 4000);

  };

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <ImageBackground
        source={require("../assets/fondo.jpg")}
        resizeMode="cover"
        style={styles.fondo}
      >

        <View style={styles.container}>

          <Text style={styles.titulo}>
            Cátalogo de Libros
          </Text>

          <Text style={styles.contador}>
            Total de libros: {libros.length}
          </Text>

          <TextInput
            placeholder="Título del libro"
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
          />

          <TextInput
            placeholder="Autor"
            style={styles.input}
            value={autor}
            onChangeText={setAutor}
          />

          <TextInput
            placeholder="Género"
            style={styles.input}
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable
            style={styles.boton}
            onPress={agregarLibro}
          >
            <Text style={styles.textoBoton}>
              Agregar Libro
            </Text>
          </Pressable>

          {loading &&
            <ActivityIndicator
              size="large"
              color="#1565C0"
              style={{ marginBottom: 20 }}
            />
          }

          <FlatList

            data={libros}

            keyExtractor={(item) => item.id}

            contentContainerStyle={{ paddingBottom: 30 }}

            renderItem={({ item }) => (

              <View style={styles.card}>

                <Text style={styles.nombreLibro}>
                  📖 {item.titulo}
                </Text>

                <Text style={styles.info}>
                  <Text style={styles.etiqueta}>Autor:</Text> {item.autor}
                </Text>

                <Text style={styles.info}>
                  <Text style={styles.etiqueta}>Género:</Text> {item.genero}
                </Text>

              </View>

            )}

          />

        </View>

      </ImageBackground>

    </TouchableWithoutFeedback>

  );

}

const styles = StyleSheet.create({

  fondo: {
    flex: 1
  },

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15
  },

  contador: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 10,
    marginBottom: 20
  },

  input: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16
  },

  boton: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },

  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 6
  },

  nombreLibro: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10
  },

  info: {
    fontSize: 16,
    marginBottom: 5
  },

  etiqueta: {
    fontWeight: "bold"
  }

});