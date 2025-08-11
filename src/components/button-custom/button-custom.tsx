import { defaultUser } from "@/constants/user-credentials";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ButtonCustom (props) {
   function handleOnPress() {
      if (defaultUser.username === props.username && defaultUser.password === props.password) {
         router.navigate('/product');
      } else {
         props.setError(true)
      }
   }

    return (
       <TouchableOpacity onPress={handleOnPress} style={styles.container}>
         <Text 
         style={styles.titleButton}>
          {props.name}
          </Text>
       </TouchableOpacity>
    )
}







