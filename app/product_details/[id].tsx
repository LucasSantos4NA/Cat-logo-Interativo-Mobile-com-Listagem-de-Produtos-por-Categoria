import { DetailsItens } from "@/src/screens/details/details-itens";
import { Stack, useLocalSearchParams } from "expo-router";

export default function DetailsProductScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerTintColor: "blue",
        }}
      />
      <DetailsItens productId={id} />
    </>
  );
}
