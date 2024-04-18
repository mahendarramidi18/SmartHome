import React from "react";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import Colors from "../../theme/Colors";

interface HeaderProps {}

interface IconProps {
  name: String;
  color?: String;
}

const Header: React.FC<HeaderProps> = () => {
  const Icon: React.FC<IconProps> = ({ name, color = Colors.white }) => {
    return <Ionicons name={name} size={30} color={color} />;
  };

  return (
    <View style={styles.mainContainer}>
      <Icon name="shield-half-outline" />
      <View style={styles.childContainer}>
        <Icon name="earth-outline" color="green" />
        <Icon name="notifications" />
        <Icon name="calendar-clear-outline" />
      </View>
    </View>
  );
};

export default Header;
