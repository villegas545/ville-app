import { useState } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";

function Index() {
  const [texto, setTexto] = useState("Clickeame");

  function cambiarTexto(texto) {
    setTexto(texto);
  }

  return (
    <View>
      <Text>{texto.toLowerCase()}</Text>
      <Text>{texto.toUpperCase()}</Text>
      <Button
        title={texto}
        color={"red"}
        accessibilityLabel="Learn more about this purple button"
        onPress={cambiarTexto}
      ></Button>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <TextInput onChangeText={setTexto}></TextInput>
    </View>
  );
}

export default Index;
