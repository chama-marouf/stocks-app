import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const News: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>News: coming soon</Text>
      </View>
    </View>
  );
};

export default News;
