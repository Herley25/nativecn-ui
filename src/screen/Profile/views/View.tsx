import {Button} from '../../../components/Button';
import {Input} from '../../../components/Input';
import {Preferences} from '../../../components/Preferences';
import {Skills} from '../../../components/Skills';
import {User} from '../../../components/User';
import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {ProfileViewProps} from '../types/ProfileViewProps';

import {colors} from '../../../styles/colors';

export const ProfileView = ({
  loading,
  error,
  email,
  password,
  date,
  handleClick,
}: ProfileViewProps) => {
  if (loading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color={colors.green[500]} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text className="text-xl font-bold text-gray-700">Página com erro</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-700">
      <ScrollView>
        <Image
          source={require('../../../../assets/banner.png')}
          className="w-full h-52 -mb-16"
        />

        <View className="flex-1 px-4 pb-4">
          <User />
          <Skills />
          <Preferences />

          <View className="w-full mt-6 flex-1">
            <Input placeholder="Company" inputClasses="mb-6" label="Company" />
            <Button label="Save" onClick={handleClick} />
          </View>

          <Text className="font-bold text-xl text-center text-white">
            {email}
          </Text>
          <Text className="font-bold text-xl text-center text-white">
            {password}
          </Text>
          <Text className="font-bold text-xl text-center text-white">
            {date}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
