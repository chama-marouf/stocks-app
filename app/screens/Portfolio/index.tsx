import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

import styles from './styles';
const Portflolio: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.COLOR_WHITE} />
      <Text style={styles.title}>No stocks added to portfolio yet !</Text>
    </View>
  );
};

export default Portflolio;
