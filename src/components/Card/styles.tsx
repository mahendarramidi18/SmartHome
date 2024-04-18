import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme/Colors";

let deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  mainContainer: {
    width: deviceWidth * 0.33,
    height: 150,
    backgroundColor: Colors.grey,
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  zeroIndexContainer: {
    marginLeft: 15,
    marginRight: 15 * 0.5,
    width: deviceWidth * 0.33 - 15 * 1.5,
  },
  nthIndexContainer: {
    marginLeft: 15 * 0.5,
    marginRight: 15,
    width: deviceWidth * 0.33 - 15 * 1.5,
  },
  middleIndexContainer: {
    marginLeft: 15 * 0.5,
    marginRight: 15 * 0.5,
    width: deviceWidth * 0.33 - 15,
  },

  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spacer: {
    flex: 1,
  },
  statusText: {
    color: "white",
    fontSize: 16,
  },
  titleText: {
    color: "white",
    fontSize: 18,
  },
});
