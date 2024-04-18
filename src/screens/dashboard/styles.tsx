import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";

export const styles = StyleSheet.create({
  sectionHeaderContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical:15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHeaderText:{
    color: Colors.white,
    fontSize: 20,
  },
  sectionHeaderIconContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:60
  }
});
