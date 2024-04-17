import React from "react";
import { View, SafeAreaView, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

import { styles as commonStyles } from "../../theme/commonStyles";
import Colors from "../../theme/Colors";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const Icon = ({ name, color = Colors.white }) => {
    return <Ionicons name={name} size={30} color={color} />;
  };
  return (
    <View style={styles.mainContainer}>
      <Icon name="shield-half-outline" />
      <View style={styles.childContainer}>
        <Icon name="earth-outline" color="green" />
        <Icon name="notifications-outline" />
        <Icon name="calendar-clear-outline" />
      </View>
    </View>
  );
};

export default Header;
