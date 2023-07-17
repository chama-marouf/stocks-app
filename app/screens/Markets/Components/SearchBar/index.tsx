import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search markets"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: 10,
          paddingHorizontal: 12,
        }}>
        <Icon name="magnify" color="#FFF" size={24} />
      </TextInput>
    </View>
  );
};

export default SearchBar;
