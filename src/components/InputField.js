import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';
import {background, primary} from '../config/colors';
import { Text } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import {DatePickerIcon, PickerIcon} from './SVGImages';
// import RNPickerSelect from 'react-native-picker-select';
// import {pickerStyle} from '../helpers/CustomStyle';
// import { States } from '../constants/ArrayLists';

const InputField = ({
  keyboardType = 'default',
  multiline = false,
  onChangeText,
  value,
  placeholder = 'johndoe',
  placeholderTextColor = primary.text,
  height = 56,
  width = '80%',
  label = 'Username',
  labelWidth = 58,
  secureTextEntry = false,
  textInput = true,
  // datepicker = false,
  // isVisible,
  // datePickerMode = 'date',
  // maximumDate = null,
  // onConfirm,
  // onCancel,
  // dateRef,
  // dateLabel = '',
  // rnpicker = false,
  // onPickerValueChange,
  // items = [],
}) => {
  return (
    <Container style={{height, width}}>
      <Text
        style={{
          marginLeft: 1,
          marginTop: -11,
          fontSize: 13,
          backgroundColor: background.main,
          width: labelWidth,
          color: primary.text,
        }}>
        {label}
      </Text>
      {textInput && (
        <TextInput
          style={{width: '100%', height: '100%', marginTop: -6}}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          autoCapitalize='none'
          autoCompleteType='off'
        />
      )}
      {/* {datepicker && (
        <>
          <Text style={{marginTop: 10}}>{dateLabel}</Text>
          <DateTimePickerModal
            isVisible={isVisible}
            mode={datePickerMode}
            maximumDate={maximumDate}
            onConfirm={onConfirm}
            onCancel={onCancel}
            ref={dateRef}
          />
          <DatePickerIcon style={{position: 'absolute', right: 10, top: 15}} />
        </>
      )}
      {rnpicker && (
        <>
          <RNPickerSelect
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
            onValueChange={onPickerValueChange}
            items={items}
          />
          <PickerIcon style={{position: 'absolute', right: 15, top: 20}} />
        </>
      )} */}
    </Container>
  );
};

export default InputField;

const Container = styled.View`
  background: ${background.main};
  border: 1px solid ${primary.text};
  border-radius: 8px;
  margin-top: 22px;
  padding-left: 20px;
`;
