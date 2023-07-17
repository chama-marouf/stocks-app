import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';
import { theme } from 'app/styles';
const { colors } = theme;

const News: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.COLOR_WHITE} />
      <Text style={styles.title}>News: coming soon</Text>
    </View>
  );
};

export default News;
