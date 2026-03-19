import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [rodando,setRodando] = useState(false);

  function Alternar(){
    setRodando(!rodando);
  }


  return (
    <View style={style.container}>
      <Image style={style.image} source={require('./relogio.png')} />
      <View style={style.actions}>
      <Text style={style.timer}>25:00</Text>
      <Pressable onPress={Alternar}
         style={rodando ? style.buttonParar : style.buttonIniciar}>
          <Text style={style.textButton}>{rodando ? "Parar" : "Inicar"}</Text>
      </Pressable>
    </View>
    <View style={style.footer}>
      <Text style={style.textfooter}>Curso de react</Text>
      <Text style={style.textfooter}>2026 - Meu App</Text>
    </View>
    </View>
  );
}

function Cronometro(){
  const [segundos, setSegundos] = useState(0);


  useEffect (() => {
    let intervalo = null;
    
    if(rodando){
      intervalo = setInterval(() => {
        setSegundos((prev) => prev +1);
      }, 1000);
    } 
    else{
      clearInterval(intervalo);
    }

  return () => clearInterval(intervalo);
}, [rodando]);

const formatarTempo = () => {
  const minutos = Math.floor(segundos /60);
  const segundos = segundos % 60;
  return `${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`
}
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  actions: {
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
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonIniciar: {
    backgroundColor: "#0fb64f",
    borderRadius: 32,
    padding: 8
  },
  buttonParar: {
    backgroundColor: "#b30816",
    borderRadius: 32,
    padding: 8
  },
  textButton: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18
  },
  footer: {
    width: "80%"
  },
  textfooter: {
    textAlign: "center",
    color: "#98A0A8",
    fontStyle: 12.5
  }
})
