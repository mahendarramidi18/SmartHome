import React from "react";
import { View, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import Colors from "../../theme/Colors";

interface WeatherInfoProps {
  title: String;
  state: String;
  temperature: String;
  humudity: String;
  weatherType: String;
}

const WeatherInfo: React.FC<WeatherInfoProps> = (props: WeatherInfoProps) => {
  const { title, state, temperature, humudity, weatherType } = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitleContainer}>
        <View style={styles.hearderTileSubContainer} />
        <Text style={styles.headerTitleText}>{title}</Text>
      </View>
      <Text style={styles.headerStateText}>{state}</Text>
      <View style={styles.tempContainer}>
        <Text style={styles.headerTempText}>{`${temperature} °C`}</Text>
        <Ionicons name={"cloud-outline"} size={50} color={Colors.white} />
      </View>
      <View style={styles.humudityContainer}>
        <View style={styles.headerTitleContainer}>
          <Ionicons name={"water-outline"} size={25} color={Colors.white} />
          <Text style={styles.headerHumidityText}>{`${humudity}%`}</Text>
        </View>

        <Text style={styles.headerHumidityText}>{weatherType}</Text>
      </View>
    </View>
  );
};

export default WeatherInfo;
