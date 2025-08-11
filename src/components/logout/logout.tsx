import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function FloatingLogoutButton({}) {
  function handleLogout() {
    router.navigate("/");
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <MaterialIcons name="power-settings-new" size={24} color="white" />
    </TouchableOpacity>
  );
}
