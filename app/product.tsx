import FloatingLogoutButton from "@/src/components/logout/logout";
import { masculino } from "@/src/screens/product/men";
import { RenderTabBar } from "@/src/screens/product/render";
import { feminino } from "@/src/screens/product/woman";
import { Stack } from "expo-router";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

export default function FromProducts() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "menScreen", title: "Produtos Masculino" },
    { key: "womanScreen", title: " Produtos Feminino" },
  ]);

  const renderScene = SceneMap({
    menScreen: masculino,
    womanScreen: feminino,
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "#00000000",
          },
          headerTintColor: "blue",
        }}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={RenderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <FloatingLogoutButton></FloatingLogoutButton>
    </>
  );
}
