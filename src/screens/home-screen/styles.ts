import { StyleSheet } from "react-native";

export const gradientStyles = {
  colors: [
    "rgba(37, 103, 232, 1)",
    "rgba(37, 103, 232, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
  ],
  locations: [0, 0.5, 0.5, 1],
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  Input: {
    alignItems: "center",
    alignContent: "center",
    height: 37,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 8,
  },
  titleInput: {
    textAlign: "left",
    width: "90%",
    marginBottom: 8,
    marginTop: 12,
  },
  loginContainer: {
    marginVertical: 1,
    position: "relative",
    zIndex: 3,
    backgroundColor: "#fff",
    width: "80%",
    height: 306,
    borderRadius: 16,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    padding: 16,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 32,
    color: "#fff",
    height: 39,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    paddingBottom: 19,
    paddingTop: 19,
  },
});
