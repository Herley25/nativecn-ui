import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

interface BadgeProps {
  icon: ImageSourcePropType;
  label: string;
}

export const Badge = ({icon, label}: BadgeProps) => {
  return (
    <View className="bg-gray-500 rounded-full flex-row p-2 items-center">
      <Image source={icon} className="w-4 h-4" />
      <Text className="text-white font-bold ml-2">{label}</Text>
    </View>
  );
};
