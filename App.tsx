/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Dashboard from './src/screens/dashboard/index';
import { styles } from './src/theme/commonStyles';


function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles.flexContainer}>
      {/* <StatusBar
        barStyle={'light-content' }
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <Dashboard />
      
    </SafeAreaView>
  );
}


export default App;
