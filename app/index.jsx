import { Text, View,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style = {style.container}>
      <Text>Bora Bill</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#021129"
    }
})
