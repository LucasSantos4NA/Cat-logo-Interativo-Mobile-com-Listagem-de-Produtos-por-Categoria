import { Home } from "@/src/screens/home-screen/home-screen";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Home />
    </>
  );
}
