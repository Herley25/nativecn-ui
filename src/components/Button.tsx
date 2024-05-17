import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({label, onClick}: ButtonProps) => {
  return (
    <TouchableOpacity
      className="items-center bg-green-500 py-3 rounded-md"
      onPress={onClick}>
      <Text className="font-bold text-base text-black">{label}</Text>
    </TouchableOpacity>
  );
};
