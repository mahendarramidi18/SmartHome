import React from "react";
import { View, SafeAreaView, SectionList, Text, Flatlist } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import { styles as commonStyles } from "../../theme/commonStyles";
import Header from "../../components/Header/index";
import dashboardData from "../../json/dashboard.json";
import Colors from "../../theme/Colors";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const WeartherInfo = () => {
    const headerData = dashboardData.headerData;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <View style={styles.hearderTileSubContainer} />
          <Text style={styles.headerTitleText}>{headerData.title}</Text>
        </View>
        <Text style={styles.headerStateText}>{headerData.location.state}</Text>
        <View style={styles.tempContainer}>
          <Text
            style={styles.headerTempText}
          >{`${headerData.temperature} °C`}</Text>
          <Ionicons name={"cloud-outline"} size={50} color={Colors.white} />
        </View>
        <View style={styles.humudityContainer}>
          <View style={styles.headerTitleContainer}>
            <Ionicons name={"water-outline"} size={25} color={Colors.white} />
            <Text
              style={styles.headerHumidityText}
            >{`${headerData.humudity}%`}</Text>
          </View>

          <Text style={styles.headerHumidityText}>
            {headerData.weatherType}
          </Text>
        </View>
      </View>
    );
  };

  const sectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.headerHumidityText}>{section.title}</Text>
      </View>
    );
  };

  const sectionFooter = ({ section }) => {
    let data = dashboardData.bodyData;
    let index = data.findIndex((item) => item.title === section.title);
    let bodyData = data[index].data;

    const listItem = ({ item }) => {
      return <View />;
    };
    return <View />;
  };

  return (
    <View style={commonStyles.flexContainer}>
      <Header />
      <SectionList
        sections={dashboardData.bodyData}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={<WeartherInfo />}
        renderItem={() => <View />}
        renderSectionHeader={sectionHeader}
        renderSectionFooter={sectionFooter}
      />
    </View>
  );
};

export default Dashboard;
