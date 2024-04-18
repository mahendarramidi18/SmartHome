import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitleText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  headerStateText: {
    marginTop: 15,
    color: Colors.white,
    fontSize: 16,
  },
  headerTempText: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 5,
  },
  headerHumidityText: {
    color: Colors.white,
    fontSize: 16,
  },
  hearderTileSubContainer: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 4,
  },
  humudityContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tempContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
