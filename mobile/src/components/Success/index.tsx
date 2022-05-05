import React from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import successImg from '../../assets/success.png'
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface SuccessProps {
  onSendAnotherFeedback: () => void
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={successImg}
        style={styles.image}
        />

      <Text style={styles.title}>
        Thank you for your feedback!
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>
          Send another feedback
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}