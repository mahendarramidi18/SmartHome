import React from "react";
import { View, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../theme/Colors";

import { styles } from "./styles";

interface CardProps {
  title: String;
  status: String;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, status, index }) => {
  return (
    <View
      style={[
        styles.mainContainer,
        index == 0
          ? styles.zeroIndexContainer
          : index == 3
          ? styles.nthIndexContainer
          : styles.middleIndexContainer,
      ]}
    >
      <View style={styles.statusContainer}>
        <Ionicons name="bulb-outline" size={50} color={Colors.white} />
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <View style={styles.spacer} />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Card;
