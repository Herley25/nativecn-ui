import React, {forwardRef} from 'react';
import {Preferences} from '../../components/Preferences';
import {Skills} from '../../components/Skills';
import {User} from '../../components/User';
import {Image, View, ScrollView} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useToast} from '../../components/Toast';

export const Profile = forwardRef(() => {
  const {toast} = useToast();

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
        </View>
      </ScrollView>
    </View>
  );
});
