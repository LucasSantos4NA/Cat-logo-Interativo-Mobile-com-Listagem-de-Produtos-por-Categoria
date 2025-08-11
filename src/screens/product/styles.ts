import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
    alignItems: "center",
  },
  scene1: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 15,
    height: "100%",
  },
  stylesCard: {
    display: "flex",
    width: 167,
    height: 300,
    padding: 5,
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "#BDBDBD",
    borderRadius: 5,
    borderWidth: 1,
    margin: 6,
  },
  cardImage: {
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: 150,
  },
  cardTitle: {
    borderTopWidth: 1,
    borderColor: "#BDBDBD",
    borderStyle: "solid",
    fontWeight: "bold",
    fontSize: 12,
    paddingTop: 6,
  },

  cardText: {
    height: 60,
    fontSize: 8,
    color: "#656565",
    marginTop: 4,
    textAlign: "left",
  },
  cardDisc: {
    paddingLeft: 5,
    paddingTop: 25,
    fontSize: 11,
    color: "#656565",

    textDecorationLine: "line-through",
  },
  cardPrice: {
    paddingTop: 14,
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
  },
  alin: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  indicatorStyle: {
    backgroundColor: "#2567E8",
  },
  style: {
    backgroundColor: "#rgba(0,0,0,0)",
  },
  tab: {
    backgroundColor: "white",
  },
  colorRender: {
    color: "black",
  },
});
