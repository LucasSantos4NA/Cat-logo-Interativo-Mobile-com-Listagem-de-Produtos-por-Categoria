import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  image: {
    backgroundColor: "#DADADA33",
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    textAlign: "justify",
    fontSize: 16,
    color: "#555",
    marginVertical: 5,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  cardDisc: {
    paddingTop: 5,
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 17,
    color: "#656565",
    textDecorationLine: "line-through",
  },
  cardPrice: {
    paddingTop: 2,
    fontSize: 20,
    color: "#B20000",
    fontWeight: "bold",
  },
});
