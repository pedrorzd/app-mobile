import { Text, View,StyleSheet, Pressable, Image } from "react-native";

export default function Index() {
  return (
    <View style = {style.container}>
        <Image source={require('./unnamed.png')} />
        <View style={style.actions}>
        <Text style={style.timer}>25:00</Text>
        <Pressable style={style.button}>
            <Text style={style.textButton}>Começar</Text>
        </Pressable>
    </View>
    <View style={style.footer}>
        <Text style={style.textfooter}>Curso de react native </Text>
        <Text style={style.textfooter}> 2025 - Meu App </Text>
    </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        gap: 40
    },
    actions:{
        padding: 24,
        backgroundColor: "#14448080",
        width: "80%",
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#144480",
        gap: 32
    },
    timer: {
        fontSize: 54,
        color: "#fff",
        fontWeigth: "bold",
        textAlign: "center"
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    button:{
        backgroundColor: 'B872FF',
        borderRadius: 32,
        padding: 8
    },
    textButton:{
        textAlign: "center",
        color: "#021123",
        fontSize: 18,
    },
    footer:{
        width: "80%",
        backgroundColor: "black"
    },
    textfooter:{
        textAlign: "center",
        color: "#98A0A8",
        fontStyle: 12.5
    }

})
