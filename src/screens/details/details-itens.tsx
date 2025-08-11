import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  productId: string;
};

export const DetailsItens = ({ productId }: Props) => {
  const [item, setItem] = useState<any>(null);

  function formatPrice(value: number) {
    return value.toFixed(2).replace(".", ",");
  }

  useEffect(() => {
    async function fetchItem() {
      const res = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setItem(res.data);
    }
    fetchItem();
  }, [productId]);

  if (!item) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.cardPrice}>R$ {formatPrice(item.price)}</Text>

        <Text style={styles.cardDisc}>
          R$
          {formatPrice(item.price / (1 - item.discountPercentage / 100))}
        </Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
  );
};
