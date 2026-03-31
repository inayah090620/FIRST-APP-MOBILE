import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* TEXT */}
      <Text style={styles.text}>Halo, saya Nurul Inayah - 2405102013</Text>

      {/* GAMBAR */}
      <Image
        source={require("../../assets/images/image.png")}
        style={styles.image}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ddbff", // warna cerah
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
});
