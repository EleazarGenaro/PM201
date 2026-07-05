import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        📚 ACTIVIDAD 17 📚
      </Text>

      <Text style={styles.subtitulo}>
        REPASO 2
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1565C0"
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center"
  },

  subtitulo: {
    fontSize: 20,
    color: "white"
  }

});