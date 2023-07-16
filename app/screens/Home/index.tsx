import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import SearchBar from './Components/SearchBar';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Markets</Text>
        <SearchBar />
      </View>
    </View>
  );
};

export default Home;
