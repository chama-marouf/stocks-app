import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Icon name="menu" color="#FFF" size={24} />
      <Icon name="bell-outline" color="#FFF" size={24} />
    </View>
  );
};

export default Header;
