import React from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';

import {colors} from '../styles/colors';

import {cn} from '../lib/utils';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(prev => !prev);
  };

  return (
    <View
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}>
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(
            'w-8 h-8 rounded-md bg-gray-800 flex justify-center items-center',
            {
              'bg-green-500': isChecked,
            },
            checkboxClasses,
          )}>
          {isChecked && (
            <MaterialIcon name="check" size={20} color={colors.gray[800]} />
          )}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn('text-primary', labelClasses)}>{label}</Text>
      )}
    </View>
  );
}

export {Checkbox};
