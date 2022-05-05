import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotProps {
  screenshot: string|null
  onScreenshotTook: () => void
  onRemoveShot: () => void
}

export function Screenshot({ 
  screenshot,
  onScreenshotTook,
  onRemoveShot 
}: ScreenshotProps) {
  return (
    <TouchableOpacity 
      onPress={screenshot ? onRemoveShot : onScreenshotTook}
      style={styles.container}>
        {
          screenshot ?
          <View>
            <Image 
              style={styles.image} 
              source={{uri: screenshot}} />
            <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight='fill'
            style={styles.removeIcon} />
          </View> :
          <Camera
            size={24}
            color={theme.colors.text_primary}
            weight='bold' />
        }
    </TouchableOpacity>
  );
}