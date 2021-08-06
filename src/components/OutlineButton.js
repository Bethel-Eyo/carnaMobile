import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import {primary, milky, background} from '../config/colors';
import { Text } from 'react-native';

const OutlineButton = ({
  height = 50,
  title = '',
  loading = false,
  color = primary.main,
  onPress = () => null,
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height,
        backgroundColor: background.main,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color,
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

export default OutlineButton;
