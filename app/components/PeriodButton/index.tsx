import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { theme } from 'app/styles';
const { colors } = theme;

type Props = {
  title: String;
  onPress: void;
  active: boolean;
};

const PeriodButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.active
            ? colors.COLOR_BLACK
            : colors.COLOR_WHITE,
        },
      ]}>
      <Text
        style={[
          styles.title,
          { color: props.active ? colors.COLOR_WHITE : colors.COLOR_BLACK },
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PeriodButton;
