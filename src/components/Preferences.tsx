import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Option} from './Option';
import {Switch} from './Switch';
import {Checkbox} from './Checkbox';

export const Preferences = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="w-full">
      <Text className="text-white font-bold text-xl mt-6 mb-2">
        Preferences
      </Text>

      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark mode</Option.Title>
        <Switch onValueChange={setIsEnabled} value={isEnabled} />
      </Option>

      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
};
