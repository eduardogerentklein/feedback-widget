import 'react-native-gesture-handler'

import { StatusBar, StatusBarProps  } from 'expo-status-bar'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium 
} from '@expo-google-fonts/inter'

import { theme } from './src/theme'
import Widget from './src/components/Widget'

const statusBarConfig = {
  style: 'light',
  backgroundColor: 'transparent',
  transparent: true
} as StatusBarProps

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <StatusBar 
        {...statusBarConfig} />

      <Widget />
    </View>
  )
}