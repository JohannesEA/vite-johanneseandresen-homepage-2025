import { StyleSheet } from "react-native";

export enum COLORS {
  DARK_BLUE = "#2F4073",
  WHITE = "#F2F2F2",
  LIGHT_GREEN = "#BDD9B0",
  DARK_GREEN = "#384001",
  BROWN = "#A67360",
  LIGHT_GREY = "#E6DFDD",
}

export const globalStyles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 25,
    marginBottom: 40,
    color: "black",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  textarea: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
    minHeight: 100,
  },
  listButtonContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonContainer: {
    width: "60%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonContainerRow: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  smallButton: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  smallButtonOutlined: {
    backgroundColor: "white",
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
