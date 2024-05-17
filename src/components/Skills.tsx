import {SKILLS} from '../utils/skills';
import React from 'react';
import {Text, View} from 'react-native';
import {Badge} from './Badge';

export const Skills = () => {
  return (
    <View className="w-full">
      <Text className="text-white font-bold text-xl mt-6 mb-2">Skills</Text>

      <View className="flex-row w-full flex-wrap gap-3">
        {SKILLS.map(skill => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
};
