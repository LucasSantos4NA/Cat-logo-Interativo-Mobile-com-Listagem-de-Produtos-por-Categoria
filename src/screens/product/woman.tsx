import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { resquetApi } from "../../api/clothes";
import { styles } from "./styles";

export function feminino() {
  const [roupasHomem, setroupasHomem] = useState([]);
  function formatPrice(value: number) {
    return value.toFixed(2).replace(".", ",");
  }
  useEffect(() => {
    async function fetchData() {
      const data = await resquetApi(true);
      setroupasHomem(data.data.products);
    }

    fetchData();
  }, []);

  return (
    <View
      style={[styles.scene1, Platform.OS === "web" && { overflow: "scroll" }]}
    >
      <SafeAreaView style={{ marginTop: 20 }}>
        <FlatList
          data={roupasHomem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.stylesCard}>
              <TouchableOpacity
                onPress={() => router.navigate(`/product_details/${item.id}`)}
              >
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />

                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.description}</Text>
                <View style={styles.alin}>
                  <Text style={styles.cardPrice}>
                    R$ {formatPrice(item.price)}
                  </Text>
                  <Text style={styles.cardDisc}>
                    R$
                    {formatPrice(
                      item.price / (1 - item.discountPercentage / 100)
                    )}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
