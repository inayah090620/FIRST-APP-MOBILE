import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    width: "85%",
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontFamily: "SuperPopstar",
    fontSize: 32,
    marginBottom: 10,
  },
  title1: {
    fontFamily: "BolinkerQuantumItalic",
    fontSize: 32,
    marginBottom: 10,
  },
  title2: {
    fontFamily: "Butterpop",
    fontSize: 32,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
