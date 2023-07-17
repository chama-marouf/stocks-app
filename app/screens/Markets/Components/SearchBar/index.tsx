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
    <View style={styles.inputContainer}>
      <Icon name="magnify" color="#FFF" size={24} />
      <TextInput
        placeholder="Search"
        // value={searchQuery}
        onChangeText={onSearchQueryChange}
        style={{
          flex: 1,
        }}></TextInput>
    </View>
  );
};

export default SearchBar;
