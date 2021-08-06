import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {primary, background} from '../config/colors';
import { Text } from 'react-native';

const ActionButton = ({
  height = 50,
  title = '',
  loading = false,
  color = background.light,
  onPress = () => null,
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height,
        backgroundColor: primary.main,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 8,
        ...style,
      }}
      onPress={() => {
        if (!loading) onPress();
      }}>
      {loading ? (
        <ActivityIndicator size="small" animating color={color} />
      ) : (
        <Text style={{color}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ActionButton;
