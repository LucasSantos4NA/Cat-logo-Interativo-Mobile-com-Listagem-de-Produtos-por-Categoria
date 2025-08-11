import { ErrorText } from "@/src/components/error-text/error-text";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { ButtonCustom } from "../../components/button-custom/button-custom";
import { gradientStyles, styles } from "./styles";

export function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(function clean() {
    console.log("atualizou");
    setUsername("");
    setPassword("");
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
      keyboardVerticalOffset={20}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <LinearGradient
          colors={gradientStyles.colors as any}
          locations={gradientStyles.locations as any}
          style={styles.container}
        >
          <Text style={styles.titleStyle}>Bem vindo de volta!</Text>
          <Text style={styles.textStyle}>
            Insira seus dados para entrar na sua conta
          </Text>

          <View style={styles.loginContainer}>
            <Text style={styles.titleInput}>Nome de usuário</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setUsername}
              value={username}
            />
            {username.length < 1 ? (
              <ErrorText name={"Campo Obrigatorio"}></ErrorText>
            ) : null}

            <Text style={styles.titleInput}>Senha</Text>
            <TextInput
              style={styles.Input}
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            {password.length < 1 ? (
              <ErrorText name={"Campo Obrigatorio"}></ErrorText>
            ) : null}

            <ButtonCustom
              name={"Entrar"}
              username={username}
              password={password}
              setError={setError}
            />

            {error === true ? (
              <ErrorText name={"Username ou senha invalido"}></ErrorText>
            ) : null}
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
