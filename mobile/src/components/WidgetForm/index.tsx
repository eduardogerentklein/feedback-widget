import React, { useState } from 'react';
import { 
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { ArrowLeft } from 'phosphor-react-native'
import { captureScreen } from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'

import { FeedbackType } from '../../components/Widget'
import { Screenshot } from '../../components/Screenshot'
import { Button } from '../../components/Button'

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes'
import { api } from '../../libs/api'

interface WidgetFormProps {
  feedbackType: FeedbackType
  onFeedbackCanceled: () => void
  onFeedbackSent: () => void
}

export function WidgetForm({ 
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent
}: WidgetFormProps) {
  const [screenshot, setScreenshot] = useState<string|null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  const handleRemoveScreenshot = () => {
    setScreenshot(null)
  }

  const handleSendFeedback = async () => {
    if (isSendingFeedback) {
      return
    }

    setIsSendingFeedback(true)
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(
      screenshot,
      {
        encoding: 'base64'
      }
    )

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      })

      onFeedbackSent()
    } catch (err) {
      console.log(err)
      setIsSendingFeedback(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image}
            style={styles.image}
            />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Something is not working properly? Tell us with details what is happening...'
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
        />

        <View style={styles.footer}>
          <Screenshot
            onScreenshotTook={handleScreenshot}
            onRemoveShot={handleRemoveScreenshot}
            screenshot={screenshot} />

          <Button 
            onPress={handleSendFeedback}
            isLoading={isSendingFeedback} />
        </View>
    </View>
  );
}