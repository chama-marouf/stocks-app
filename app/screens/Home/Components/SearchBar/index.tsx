import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SearchBar</Text>
      <TextInput
        placeholder="Search markets"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: 10,
          width: '80%',
        }}
      />
    </View>
  );
};

export default SearchBar;
