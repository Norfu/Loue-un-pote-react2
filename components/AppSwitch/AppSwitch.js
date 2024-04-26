import React from 'react';
import { View,Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { CheckBox } from '@rneui/base';
import { Switch } from '@rneui/themed';

export default ({control, name}) => {

  return (
    <Controller
      defaultValue={false}
      control={control}
      name={name}
      render={({field: { onChange, onBlur, value }}) => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChange}
            value={value}
            defaultValue={false}
          />
          <Text>{value ? 'Tu es un poto !' : 'Je ne veux pas être un poto'}</Text>
        </View>
      )}
    />
  );
}