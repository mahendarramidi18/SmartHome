import React from "react";
import { View, SafeAreaView, SectionList, Text, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import { styles as commonStyles } from "../../theme/commonStyles";
import Header from "../../components/Header/index";
import dashboardData from "../../json/dashboard.json";
import Colors from "../../theme/Colors";
import Card from "../../components/Card/index";
import WeatherInfo from "../../components/WeatherInfo/index";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const headerData = dashboardData.headerData;

  const sectionHeader = ({ section }) => {
    let data = dashboardData.bodyData;
    let index = data.findIndex((item) => item.title === section.title);
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
        <View style={styles.sectionHeaderIconContainer}>
          {index == 0 ? (
            <View />
          ) : (
            <Ionicons name={"settings"} size={25} color={Colors.white} />
          )}
          <Ionicons name={"add-outline"} size={25} color={Colors.white} />
        </View>
      </View>
    );
  };

  const sectionFooter = ({ section }) => {
    let data = dashboardData.bodyData;
    let index = data.findIndex((item) => item.title === section.title);
    let bodyData = data[index].data;
    return (
      <FlatList
        data={bodyData}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return <Card title={item.title} status={item.status} index={index} />;
        }}
      />
    );
  };

  return (
    <View style={commonStyles.flexContainer}>
      <Header />
      <SectionList
        sections={dashboardData.bodyData}
        keyExtractor={(item:any, index:number) => item + index}
        ListHeaderComponent={
          <WeatherInfo
            title={headerData.title}
            state={headerData.location.state}
            temperature={headerData.temperature}
            humudity={headerData.humudity}
            weatherType={headerData.weatherType}
          />
        }
        renderItem={() => <View />}
        renderSectionHeader={sectionHeader}
        renderSectionFooter={sectionFooter}
      />
    </View>
  );
};

export default Dashboard;
