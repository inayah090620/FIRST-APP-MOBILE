import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    SuperPopstar: require("../assets/fonts/SuperPopstar.ttf"),
    BolinkerQuantumItalic: require("../assets/fonts/BolinkerQuantumItalic.ttf"),
    Butterpop: require("../assets/fonts/Butterpop.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
