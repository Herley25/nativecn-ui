import React from 'react';
import {Text, View} from 'react-native';
import {Avatar, AvatarFallback, AvatarImage} from './Avatar';

export const User = () => {
  return (
    <View className="items-center">
      <Avatar className="w-32 h-32">
        <AvatarImage source={{uri: 'https://github.com/herley25.png'}} />
        <AvatarFallback>HO</AvatarFallback>
      </Avatar>
      <Text className="text-white font-bold text-2xl mt-4">
        Herley Oliveira
      </Text>
      <Text className="text-gray-400 text-lg">@herleyoliveira</Text>
    </View>
  );
};
