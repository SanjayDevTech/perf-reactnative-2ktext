import { Slot } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
