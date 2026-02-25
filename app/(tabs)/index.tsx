import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../assets/styles/homeStyles";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#87CEFA", "#B0E0FF"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title1}>✨ My First App ✨</Text>
        <Text style={styles.title2}>My Name is Nurul Inayah</Text>
        <Text style={styles.subtitle}>My Experience in Web Dev 🚀</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
