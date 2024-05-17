import React, {forwardRef, useEffect} from 'react';
import {Preferences} from '../../components/Preferences';
import {Skills} from '../../components/Skills';
import {User} from '../../components/User';
import {Image, View, ScrollView, Text} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useToast} from '../../components/Toast';
import {useLogin} from '../../hooks/useLogin';

export const Profile = forwardRef(() => {
  const {loginData, getLogin} = useLogin();

  const {toast} = useToast();

  useEffect(() => {
    getLogin();
  }, [getLogin]);

  console.log('Email ==', loginData.email);
  console.log('Password ==', loginData.password);
  console.log('Date ==', loginData.date);

  return (
    <View className="flex-1 bg-gray-700">
      <ScrollView>
        <Image
          source={require('../../../assets/banner.png')}
          className="w-full h-52 -mb-16"
        />

        <View className="flex-1 px-4 pb-4">
          <User />
          <Skills />
          <Preferences />

          <View className="w-full mt-6 flex-1">
            <Input placeholder="Company" inputClasses="mb-6" label="Company" />
            <Button label="Save" onClick={() => toast('Saved')} />
          </View>

          <Text className="font-bold text-xl text-center text-white">
            {loginData.email}
          </Text>
          <Text className="font-bold text-xl text-center text-white">
            {loginData.password}
          </Text>
          <Text className="font-bold text-xl text-center text-white">
            {loginData.date}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
});
