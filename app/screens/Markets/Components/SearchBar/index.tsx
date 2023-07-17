import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchQueryChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        // value={searchQuery}
        onChangeText={onSearchQueryChange}
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
