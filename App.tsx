/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from 'navigators';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
